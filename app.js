// National Parks Data with comprehensive list from Wikipedia
const nationalParks = [
    { name: "Acadia", state: "Maine", icon: "🌲", description: "Rugged coastline and pristine wilderness on Mount Desert Island with the tallest mountain on the Atlantic coast." },
    { name: "American Samoa", state: "American Samoa", icon: "🏝️", description: "Tropical paradise with coral reefs, flying foxes, and unique Polynesian culture." },
    { name: "Arches", state: "Utah", icon: "🪨", description: "Over 2,000 natural sandstone arches including the famous Delicate Arch and Landscape Arch." },
    { name: "Badlands", state: "South Dakota", icon: "🏜️", description: "Dramatic buttes and mixed-grass prairies with rich fossil beds from the Eocene and Oligocene periods." },
    { name: "Big Bend", state: "Texas", icon: "🌵", description: "Vast wilderness along the Rio Grande with Chihuahuan Desert landscapes and the Chisos Mountains." },
    { name: "Biscayne", state: "Florida", icon: "🐠", description: "Underwater wonderland protecting Biscayne Bay and the northernmost Florida Keys coral reefs." },
    { name: "Black Canyon of the Gunnison", state: "Colorado", icon: "⛰️", description: "Dramatic black walls carved by the Gunnison River through ancient Precambrian rock." },
    { name: "Bryce Canyon", state: "Utah", icon: "🧡", description: "Spectacular amphitheaters filled with colorful sandstone hoodoos on the Paunsaugunt Plateau." },
    { name: "Canyonlands", state: "Utah", icon: "🏔️", description: "Vast wilderness carved by the Colorado and Green Rivers with mesas, buttes, and ancient petroglyphs." },
    { name: "Capitol Reef", state: "Utah", icon: "🏛️", description: "The Waterpocket Fold monocline creates a landscape resembling the US Capitol dome." },
    { name: "Carlsbad Caverns", state: "New Mexico", icon: "🦇", description: "Underground chambers including the famous bat flight program with Mexican free-tailed bats." },
    { name: "Channel Islands", state: "California", icon: "🏖️", description: "California's Galapagos with unique island foxes and rich Chumash cultural history." },
    { name: "Congaree", state: "South Carolina", icon: "🌳", description: "Old-growth bottomland hardwood forest along the Congaree River with towering trees." },
    { name: "Crater Lake", state: "Oregon", icon: "🌊", description: "Pristine lake formed in Mount Mazama's caldera, famous for its deep blue color and clarity." },
    { name: "Cuyahoga Valley", state: "Ohio", icon: "🚂", description: "Historic Ohio and Erie Canal corridor with waterfalls, forests, and the scenic railroad." },
    { name: "Death Valley", state: "California/Nevada", icon: "☀️", description: "Hottest, driest, and lowest place in North America with unique desert landscapes." },
    { name: "Denali", state: "Alaska", icon: "🏔️", description: "North America's highest peak and vast wilderness home to grizzly bears, wolves, and caribou." },
    { name: "Dry Tortugas", state: "Florida", icon: "🏰", description: "Remote islands with historic Fort Jefferson and crystal-clear waters perfect for snorkeling." },
    { name: "Everglades", state: "Florida", icon: "🐊", description: "River of grass ecosystem home to alligators, manatees, and countless bird species." },
    { name: "Gates of the Arctic", state: "Alaska", icon: "🌌", description: "Pristine wilderness north of the Arctic Circle with no roads, trails, or facilities." },
    { name: "Gateway Arch", state: "Missouri", icon: "🌉", description: "Iconic 630-foot stainless steel arch commemorating westward expansion." },
    { name: "Glacier", state: "Montana", icon: "❄️", description: "Crown of the Continent with pristine lakes, alpine meadows, and diverse wildlife." },
    { name: "Glacier Bay", state: "Alaska", icon: "🧊", description: "Tidewater glaciers, fjords, and marine wildlife in Southeast Alaska." },
    { name: "Grand Canyon", state: "Arizona", icon: "🏜️", description: "One of the world's most spectacular geological formations carved by the Colorado River." },
    { name: "Grand Teton", state: "Wyoming", icon: "⛰️", description: "Dramatic mountain peaks rising abruptly from Jackson Hole valley floor." },
    { name: "Great Basin", state: "Nevada", icon: "🌲", description: "Desert and mountain wilderness with ancient bristlecone pines and Lehman Caves." },
    { name: "Great Sand Dunes", state: "Colorado", icon: "🏔️", description: "North America's tallest sand dunes against the backdrop of the Sangre de Cristo Mountains." },
    { name: "Great Smoky Mountains", state: "Tennessee/North Carolina", icon: "🌲", description: "Ancient mountains with diverse wildlife, waterfalls, and rich Appalachian culture." },
    { name: "Guadalupe Mountains", state: "Texas", icon: "🏔️", description: "Highest peaks in Texas with diverse ecosystems from desert to coniferous forest." },
    { name: "Haleakalā", state: "Hawaii", icon: "🌺", description: "House of the Sun with spectacular sunrise views and unique silversword plants." },
    { name: "Hawaiʻi Volcanoes", state: "Hawaii", icon: "🌋", description: "Active volcanoes Kilauea and Mauna Loa showcase the power of volcanic creation." },
    { name: "Hot Springs", state: "Arkansas", icon: "♨️", description: "Historic bathhouses and natural thermal springs in the Ouachita Mountains." },
    { name: "Indiana Dunes", state: "Indiana", icon: "🏖️", description: "Diverse ecosystems along Lake Michigan's southern shore with rare plants and birds." },
    { name: "Isle Royale", state: "Michigan", icon: "🐺", description: "Remote island wilderness in Lake Superior famous for wolf and moose research." },
    { name: "Joshua Tree", state: "California", icon: "🌵", description: "Unique desert landscape where the Mojave and Colorado deserts meet." },
    { name: "Katmai", state: "Alaska", icon: "🐻", description: "Brown bears fishing for salmon at Brooks Falls and the Valley of Ten Thousand Smokes." },
    { name: "Kenai Fjords", state: "Alaska", icon: "🐋", description: "Glacial fjords and abundant marine wildlife including whales, seals, and seabirds." },
    { name: "Kings Canyon", state: "California", icon: "🌲", description: "Deep canyons and giant sequoias in the southern Sierra Nevada." },
    { name: "Kobuk Valley", state: "Alaska", icon: "🦌", description: "Arctic wilderness with sand dunes and caribou migration routes." },
    { name: "Lake Clark", state: "Alaska", icon: "🏔️", description: "Pristine wilderness with volcanoes, glaciers, and excellent fishing." },
    { name: "Lassen Volcanic", state: "California", icon: "🌋", description: "All four types of volcanoes and hydrothermal features in the Cascade Range." },
    { name: "Mammoth Cave", state: "Kentucky", icon: "🕳️", description: "World's longest known cave system with over 400 miles of surveyed passageways." },
    { name: "Mesa Verde", state: "Colorado", icon: "🏛️", description: "Ancestral Puebloan cliff dwellings and archaeological sites dating back 700 years." },
    { name: "Mount Rainier", state: "Washington", icon: "🏔️", description: "Iconic stratovolcano with glaciers, wildflower meadows, and old-growth forests." },
    { name: "New River Gorge", state: "West Virginia", icon: "🌉", description: "Ancient river cutting through Appalachian plateau with world-class whitewater rafting." },
    { name: "North Cascades", state: "Washington", icon: "⛰️", description: "American Alps with jagged peaks, glaciers, and pristine wilderness." },
    { name: "Olympic", state: "Washington", icon: "🌲", description: "Diverse ecosystems from temperate rainforests to alpine peaks and rugged coastline." },
    { name: "Petrified Forest", state: "Arizona", icon: "🪨", description: "Colorful petrified wood and Painted Desert landscapes with ancient fossils." },
    { name: "Pinnacles", state: "California", icon: "🦅", description: "Unique rock formations and caves formed by ancient volcanic activity, home to California condors." },
    { name: "Redwood", state: "California", icon: "🌲", description: "World's tallest trees in coastal fog belt with pristine rivers and diverse wildlife." },
    { name: "Rocky Mountain", state: "Colorado", icon: "🏔️", description: "High alpine wilderness with peaks over 14,000 feet and diverse ecosystems." },
    { name: "Saguenay Fjord", state: "Alaska", icon: "🐋", description: "Deep fjords carved by glaciers with abundant marine wildlife." },
    { name: "Sequoia", state: "California", icon: "🌲", description: "Giant sequoias including General Sherman, the world's largest tree by volume." },
    { name: "Shenandoah", state: "Virginia", icon: "🍂", description: "Blue Ridge Mountains with Skyline Drive, waterfalls, and diverse wildlife." },
    { name: "Theodore Roosevelt", state: "North Dakota", icon: "🦬", description: "Badlands wilderness that inspired a president's conservation legacy." },
    { name: "Virgin Islands", state: "US Virgin Islands", icon: "🏝️", description: "Tropical paradise with coral reefs, pristine beaches, and colonial history." },
    { name: "Voyageurs", state: "Minnesota", icon: "🛶", description: "Waterways and forests along the Canadian border with rich fur trading history." },
    { name: "White Sands", state: "New Mexico", icon: "🤍", description: "Brilliant white gypsum sand dunes in the Tularosa Basin." },
    { name: "Wind Cave", state: "South Dakota", icon: "🕳️", description: "Complex cave system and mixed-grass prairie with bison and prairie dogs." },
    { name: "Wrangell-St. Elias", state: "Alaska", icon: "🏔️", description: "Largest national park with massive glaciers and peaks in four mountain ranges." },
    { name: "Yellowstone", state: "Wyoming/Montana/Idaho", icon: "🌋", description: "World's first national park with geysers, hot springs, and diverse wildlife." },
    { name: "Yosemite", state: "California", icon: "🏔️", description: "Iconic granite cliffs, waterfalls, and giant sequoias in the Sierra Nevada." },
    { name: "Zion", state: "Utah", icon: "🏜️", description: "Towering sandstone cliffs and narrow slot canyons carved by the Virgin River." }
];

// ELO Rating System
class ELORatingSystem {
    constructor() {
        this.K_FACTOR = 32; // Standard chess K-factor
        this.INITIAL_RATING = 1500; // Standard starting rating
    }

    calculateNewRatings(winnerRating, loserRating) {
        const expectedWinner = this.getExpectedScore(winnerRating, loserRating);
        const expectedLoser = this.getExpectedScore(loserRating, winnerRating);
        
        const newWinnerRating = Math.round(winnerRating + this.K_FACTOR * (1 - expectedWinner));
        const newLoserRating = Math.round(loserRating + this.K_FACTOR * (0 - expectedLoser));
        
        return { winner: newWinnerRating, loser: newLoserRating };
    }

    getExpectedScore(ratingA, ratingB) {
        return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
    }
}

// App State Management
class ParkRankingApp {
    constructor() {
        this.eloSystem = new ELORatingSystem();
        this.parks = this.initializeParks();
        this.votes = JSON.parse(localStorage.getItem('parkVotes')) || [];
        this.currentMatchup = null;
        
        this.initializeApp();
    }

    initializeParks() {
        const savedRatings = JSON.parse(localStorage.getItem('parkRatings')) || {};
        
        return nationalParks.map(park => ({
            ...park,
            rating: savedRatings[park.name] || this.eloSystem.INITIAL_RATING,
            previousRating: savedRatings[park.name] || this.eloSystem.INITIAL_RATING,
            votes: 0
        }));
    }

    saveData() {
        const ratings = {};
        this.parks.forEach(park => {
            ratings[park.name] = park.rating;
        });
        localStorage.setItem('parkRatings', JSON.stringify(ratings));
        localStorage.setItem('parkVotes', JSON.stringify(this.votes));
    }

    generateMatchup() {
        // Select two random parks
        const shuffled = [...this.parks].sort(() => 0.5 - Math.random());
        this.currentMatchup = {
            park1: shuffled[0],
            park2: shuffled[1]
        };
        
        this.displayMatchup();
    }

    displayMatchup() {
        const park1Element = document.getElementById('park1');
        const park2Element = document.getElementById('park2');
        
        this.updateParkCard(park1Element, this.currentMatchup.park1);
        this.updateParkCard(park2Element, this.currentMatchup.park2);
        
        // Add click handlers
        park1Element.onclick = () => this.vote(this.currentMatchup.park1, this.currentMatchup.park2);
        park2Element.onclick = () => this.vote(this.currentMatchup.park2, this.currentMatchup.park1);
    }

    updateParkCard(element, park) {
        const rank = this.parks.sort((a, b) => b.rating - a.rating).findIndex(p => p.name === park.name) + 1;
        
        element.querySelector('.park-icon').textContent = park.icon;
        element.querySelector('.park-name').textContent = park.name;
        element.querySelector('.rank').textContent = `rank #${rank}`;
        element.querySelector('.park-description').textContent = park.description;
        
        // Remove any existing selection
        element.classList.remove('selected');
    }

    vote(winner, loser) {
        // Visual feedback
        document.getElementById('park1').classList.remove('selected');
        document.getElementById('park2').classList.remove('selected');
        
        if (winner === this.currentMatchup.park1) {
            document.getElementById('park1').classList.add('selected');
        } else {
            document.getElementById('park2').classList.add('selected');
        }

        // Update ratings
        const oldWinnerRating = winner.rating;
        const oldLoserRating = loser.rating;
        
        const newRatings = this.eloSystem.calculateNewRatings(winner.rating, loser.rating);
        
        // Find and update the parks in the main array
        const winnerPark = this.parks.find(p => p.name === winner.name);
        const loserPark = this.parks.find(p => p.name === loser.name);
        
        winnerPark.previousRating = winnerPark.rating;
        loserPark.previousRating = loserPark.rating;
        winnerPark.rating = newRatings.winner;
        loserPark.rating = newRatings.loser;
        winnerPark.votes++;
        loserPark.votes++;

        // Record the vote
        this.votes.unshift({
            winner: winner.name,
            loser: loser.name,
            timestamp: new Date().toISOString(),
            winnerRatingChange: newRatings.winner - oldWinnerRating,
            loserRatingChange: newRatings.loser - oldLoserRating
        });

        // Keep only last 50 votes
        if (this.votes.length > 50) {
            this.votes = this.votes.slice(0, 50);
        }

        this.saveData();
        this.updateRankings();
        this.updateRecentVotes();

        // Generate new matchup after a short delay
        setTimeout(() => {
            this.generateMatchup();
        }, 1500);
    }

    updateRankings() {
        const sortedParks = [...this.parks].sort((a, b) => b.rating - a.rating);
        const rankingsList = document.getElementById('rankings-list');
        
        rankingsList.innerHTML = '';
        
        sortedParks.slice(0, 15).forEach((park, index) => {
            const change = park.rating - park.previousRating;
            const changeClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
            const changeSymbol = change > 0 ? '↑' : change < 0 ? '↓' : '—';
            const changeText = change === 0 ? '0' : Math.abs(change);
            
            const row = document.createElement('div');
            row.className = 'ranking-row';
            row.innerHTML = `
                <span class="rank-number">${index + 1}</span>
                <div class="park-info">
                    <span class="park-emoji">${park.icon}</span>
                    <span class="park-title">${park.name}</span>
                </div>
                <span class="score">${park.rating}</span>
                <span class="change ${changeClass}">${changeSymbol}${changeText}</span>
            `;
            
            rankingsList.appendChild(row);
        });
    }

    updateRecentVotes() {
        const recentVotesElement = document.getElementById('recent-votes');
        recentVotesElement.innerHTML = '';
        
        this.votes.slice(0, 10).forEach(vote => {
            const timeAgo = this.getTimeAgo(new Date(vote.timestamp));
            const winnerPark = this.parks.find(p => p.name === vote.winner);
            const loserPark = this.parks.find(p => p.name === vote.loser);
            
            const voteItem = document.createElement('div');
            voteItem.className = 'vote-item';
            voteItem.innerHTML = `
                <span>${winnerPark.icon}</span>
                <span class="vote-winner">${vote.winner}</span>
                <span>beat</span>
                <span>${loserPark.icon}</span>
                <span class="vote-loser">${vote.loser}</span>
                <span class="vote-time">${timeAgo}</span>
            `;
            
            recentVotesElement.appendChild(voteItem);
        });
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        if (diffMins < 1) return 'now';
        if (diffMins < 60) return `${diffMins}m`;
        if (diffHours < 24) return `${diffHours}h`;
        return `${diffDays}d`;
    }

    initializeApp() {
        this.generateMatchup();
        this.updateRankings();
        this.updateRecentVotes();
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ParkRankingApp();
});
