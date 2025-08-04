#!/usr/bin/env python3
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///parks_rankings.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db = SQLAlchemy(app)

# Database Models
class Park(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    state = db.Column(db.String(200), nullable=False)
    image = db.Column(db.String(500), nullable=True)
    description = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, default=1500)  # ELO rating
    previous_rating = db.Column(db.Integer, default=1500)
    votes = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'state': self.state,
            'image': self.image,
            'description': self.description,
            'rating': self.rating,
            'previous_rating': self.previous_rating,
            'votes': self.votes
        }

class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    winner_id = db.Column(db.Integer, db.ForeignKey('park.id'), nullable=False)
    loser_id = db.Column(db.Integer, db.ForeignKey('park.id'), nullable=False)
    winner_rating_change = db.Column(db.Integer, nullable=False)
    loser_rating_change = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    
    winner = db.relationship('Park', foreign_keys=[winner_id], backref='wins')
    loser = db.relationship('Park', foreign_keys=[loser_id], backref='losses')

    def to_dict(self):
        return {
            'id': self.id,
            'winner': self.winner.name,
            'winner_image': self.winner.image,
            'loser': self.loser.name,
            'loser_image': self.loser.image,
            'winner_rating_change': self.winner_rating_change,
            'loser_rating_change': self.loser_rating_change,
            'timestamp': self.timestamp.isoformat()
        }

# ELO Rating System
class ELORatingSystem:
    def __init__(self):
        self.K_FACTOR = 32
        self.INITIAL_RATING = 1500

    def calculate_new_ratings(self, winner_rating, loser_rating):
        expected_winner = self.get_expected_score(winner_rating, loser_rating)
        expected_loser = self.get_expected_score(loser_rating, winner_rating)
        
        new_winner_rating = round(winner_rating + self.K_FACTOR * (1 - expected_winner))
        new_loser_rating = round(loser_rating + self.K_FACTOR * (0 - expected_loser))
        
        return {'winner': new_winner_rating, 'loser': new_loser_rating}

    def get_expected_score(self, rating_a, rating_b):
        return 1 / (1 + pow(10, (rating_b - rating_a) / 400))

elo_system = ELORatingSystem()

# Routes
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/api/parks', methods=['GET'])
def get_parks():
    """Get all parks with their current ratings"""
    parks = Park.query.all()
    return jsonify([park.to_dict() for park in parks])

@app.route('/api/parks/random-pair', methods=['GET'])
def get_random_pair():
    """Get two random parks for matchup"""
    parks = Park.query.order_by(db.func.random()).limit(2).all()
    if len(parks) < 2:
        return jsonify({'error': 'Not enough parks in database'}), 400
    
    return jsonify([park.to_dict() for park in parks])

@app.route('/api/vote', methods=['POST'])
def submit_vote():
    """Submit a vote and update ELO ratings"""
    data = request.get_json()
    winner_id = data.get('winner_id')
    loser_id = data.get('loser_id')
    
    if not winner_id or not loser_id:
        return jsonify({'error': 'Both winner_id and loser_id required'}), 400
    
    if winner_id == loser_id:
        return jsonify({'error': 'Winner and loser cannot be the same park'}), 400
    
    winner = Park.query.get(winner_id)
    loser = Park.query.get(loser_id)
    
    if not winner or not loser:
        return jsonify({'error': 'Park not found'}), 404
    
    # Calculate new ratings
    old_winner_rating = winner.rating
    old_loser_rating = loser.rating
    
    new_ratings = elo_system.calculate_new_ratings(winner.rating, loser.rating)
    
    # Update parks
    winner.previous_rating = winner.rating
    loser.previous_rating = loser.rating
    winner.rating = new_ratings['winner']
    loser.rating = new_ratings['loser']
    winner.votes += 1
    loser.votes += 1
    
    # Record the vote
    vote = Vote(
        winner_id=winner_id,
        loser_id=loser_id,
        winner_rating_change=new_ratings['winner'] - old_winner_rating,
        loser_rating_change=new_ratings['loser'] - old_loser_rating
    )
    
    db.session.add(vote)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'winner': winner.to_dict(),
        'loser': loser.to_dict(),
        'vote': vote.to_dict()
    })

@app.route('/api/rankings', methods=['GET'])
def get_rankings():
    """Get parks ranked by ELO rating"""
    limit = request.args.get('limit', 15, type=int)
    parks = Park.query.order_by(Park.rating.desc()).limit(limit).all()
    return jsonify([park.to_dict() for park in parks])

@app.route('/api/votes/recent', methods=['GET'])
def get_recent_votes():
    """Get recent votes"""
    limit = request.args.get('limit', 10, type=int)
    votes = Vote.query.order_by(Vote.timestamp.desc()).limit(limit).all()
    return jsonify([vote.to_dict() for vote in votes])

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get general statistics"""
    total_parks = Park.query.count()
    total_votes = Vote.query.count()
    top_park = Park.query.order_by(Park.rating.desc()).first()
    
    return jsonify({
        'total_parks': total_parks,
        'total_votes': total_votes,
        'top_park': top_park.to_dict() if top_park else None
    })

def init_database():
    """Initialize database with park data"""
    db.create_all()
    
    # Check if parks are already loaded
    if Park.query.count() > 0:
        print("Database already initialized with park data")
        return
    
    # Load parks from JSON file
    if os.path.exists('parks_data.json'):
        print("Loading parks from parks_data.json...")
        with open('parks_data.json', 'r') as f:
            parks_data = json.load(f)
        
        for park_data in parks_data:
            park = Park(
                name=park_data['name'],
                state=park_data['state'],
                image=park_data['image'],
                description=park_data['description']
            )
            db.session.add(park)
        
        db.session.commit()
        print(f"Loaded {len(parks_data)} parks into database")
    else:
        print("Warning: parks_data.json not found. Database will be empty.")

if __name__ == '__main__':
    with app.app_context():
        init_database()
    
    print("🏞️  National Parks Ranking API Server")
    print("🌐 Server running at http://localhost:5001")
    print("📊 Database: SQLite (parks_rankings.db)")
    print("🔗 API endpoints available at /api/")
    print("⭐ Press Ctrl+C to stop the server")
    
    app.run(debug=True, host='0.0.0.0', port=5001)
