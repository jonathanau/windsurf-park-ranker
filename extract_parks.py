#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import json
import re

def extract_parks_from_wikipedia():
    """Extract all national parks data from Wikipedia table"""
    url = "https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States"
    
    print("🌐 Fetching Wikipedia page...")
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the main parks table
    # The table has class "wikitable sortable" and contains park data
    table = soup.find('table', {'class': 'wikitable'})
    
    if not table:
        print("❌ Could not find parks table")
        return []
    
    parks = []
    rows = table.find_all('tr')[1:]  # Skip header row
    
    print(f"📊 Found {len(rows)} table rows")
    
    for i, row in enumerate(rows):
        try:
            cells = row.find_all(['td', 'th'])
            if len(cells) < 4:  # Need at least name, location, date, description
                continue
                
            # Extract park name (usually in first cell)
            name_cell = cells[0]
            name_link = name_cell.find('a')
            if name_link:
                park_name = name_link.get_text().strip()
            else:
                park_name = name_cell.get_text().strip()
            
            # Clean up park name (remove "National Park" suffix if present)
            park_name = re.sub(r'\s+National Park.*$', '', park_name)
            
            # Extract image from the row
            image_url = None
            img_tag = row.find('img')
            if img_tag:
                src = img_tag.get('src')
                if src:
                    # Convert to full URL if it's a relative path
                    if src.startswith('//'):
                        image_url = 'https:' + src
                    elif src.startswith('/'):
                        image_url = 'https://en.wikipedia.org' + src
                    else:
                        image_url = src
            
            # Extract location (usually second cell)
            location = ""
            if len(cells) > 1:
                location = cells[1].get_text().strip()
                # Clean up location text
                location = re.sub(r'\[.*?\]', '', location).strip()
            
            # Extract description (look for longer text cells)
            description = ""
            for cell in cells[2:]:
                cell_text = cell.get_text().strip()
                # Clean up text
                cell_text = re.sub(r'\[.*?\]', '', cell_text)
                cell_text = re.sub(r'\s+', ' ', cell_text).strip()
                
                if len(cell_text) > 50:  # Likely a description
                    description = cell_text[:200] + "..." if len(cell_text) > 200 else cell_text
                    break
            
            # Skip if we don't have basic info
            if not park_name or len(park_name) < 2:
                continue
                
            # Generate emoji based on park characteristics
            emoji = get_park_emoji(park_name, description, location)
            
            park_data = {
                "name": park_name,
                "state": location,
                "image": image_url,
                "emoji": emoji,
                "description": description or f"Beautiful national park located in {location}."
            }
            
            parks.append(park_data)
            print(f"✅ {i+1:2d}. {park_name} ({location})")
            
        except Exception as e:
            print(f"⚠️  Error processing row {i+1}: {e}")
            continue
    
    print(f"\n🎉 Successfully extracted {len(parks)} parks")
    return parks

def get_park_emoji(name, description, location):
    """Generate appropriate emoji based on park characteristics"""
    name_lower = name.lower()
    desc_lower = description.lower()
    location_lower = location.lower()
    
    # Specific park mappings
    emoji_map = {
        'yellowstone': '🌋',
        'yosemite': '🏔️',
        'grand canyon': '🏜️',
        'death valley': '☀️',
        'everglades': '🐊',
        'glacier': '❄️',
        'denali': '🏔️',
        'arches': '🪨',
        'bryce canyon': '🧡',
        'zion': '🏜️',
        'joshua tree': '🌵',
        'sequoia': '🌲',
        'redwood': '🌲',
        'olympic': '🌲',
        'great smoky mountains': '🌲',
        'acadia': '🌲',
        'rocky mountain': '🏔️',
        'grand teton': '⛰️',
        'crater lake': '🌊',
        'mammoth cave': '🕳️',
        'carlsbad caverns': '🦇',
        'wind cave': '🕳️',
        'hot springs': '♨️',
        'dry tortugas': '🏰',
        'biscayne': '🐠',
        'channel islands': '🏖️',
        'virgin islands': '🏝️',
        'american samoa': '🏝️',
        'haleakala': '🌺',
        'hawaii volcanoes': '🌋',
        'katmai': '🐻',
        'kenai fjords': '🐋',
        'glacier bay': '🧊',
        'gates of the arctic': '🌌',
        'kobuk valley': '🦌',
        'lake clark': '🏔️',
        'wrangell': '🏔️',
        'isle royale': '🐺',
        'voyageurs': '🛶',
        'theodore roosevelt': '🦬',
        'badlands': '🏜️',
        'great sand dunes': '🏔️',
        'black canyon': '⛰️',
        'mesa verde': '🏛️',
        'great basin': '🌲',
        'capitol reef': '🏛️',
        'canyonlands': '🏔️',
        'petrified forest': '🪨',
        'saguaro': '🌵',
        'big bend': '🌵',
        'guadalupe mountains': '🏔️',
        'congaree': '🌳',
        'great smoky': '🌲',
        'shenandoah': '🍂',
        'new river gorge': '🌉',
        'cuyahoga valley': '🚂',
        'indiana dunes': '🏖️',
        'gateway arch': '🌉',
        'lassen volcanic': '🌋',
        'mount rainier': '🏔️',
        'north cascades': '⛰️',
        'pinnacles': '🦅',
        'white sands': '🤍'
    }
    
    # Check for specific park names
    for key, emoji in emoji_map.items():
        if key in name_lower:
            return emoji
    
    # Fallback based on keywords
    if any(word in desc_lower for word in ['volcano', 'volcanic', 'geyser']):
        return '🌋'
    elif any(word in desc_lower for word in ['mountain', 'peak', 'alpine']):
        return '🏔️'
    elif any(word in desc_lower for word in ['desert', 'sand', 'dune']):
        return '🏜️'
    elif any(word in desc_lower for word in ['forest', 'tree', 'redwood', 'sequoia']):
        return '🌲'
    elif any(word in desc_lower for word in ['ocean', 'marine', 'coral', 'reef']):
        return '🐠'
    elif any(word in desc_lower for word in ['island', 'tropical']):
        return '🏝️'
    elif any(word in desc_lower for word in ['cave', 'cavern']):
        return '🕳️'
    elif any(word in desc_lower for word in ['glacier', 'ice']):
        return '❄️'
    elif 'alaska' in location_lower:
        return '🏔️'
    elif 'hawaii' in location_lower:
        return '🌺'
    elif 'florida' in location_lower:
        return '🐊'
    else:
        return '🏞️'

def save_parks_data(parks):
    """Save parks data to JSON file"""
    with open('parks_data.json', 'w', encoding='utf-8') as f:
        json.dump(parks, f, indent=2, ensure_ascii=False)
    print(f"💾 Saved {len(parks)} parks to parks_data.json")

def update_app_js(parks):
    """Update the app.js file with new parks data"""
    print("🔄 Updating app.js with new parks data...")
    
    # Read current app.js
    with open('app.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generate new parks array
    parks_js = "const nationalParks = [\n"
    for park in parks:
        # Escape quotes in strings
        name = park['name'].replace('"', '\\"')
        state = park['state'].replace('"', '\\"')
        description = park['description'].replace('"', '\\"')
        image = park['image'] or ''
        
        parks_js += f'    {{ name: "{name}", state: "{state}", icon: "{park["emoji"]}", image: "{image}", description: "{description}" }},\n'
    
    parks_js += "];"
    
    # Replace the nationalParks array in the file
    import re
    pattern = r'const nationalParks = \[.*?\];'
    new_content = re.sub(pattern, parks_js, content, flags=re.DOTALL)
    
    # Write back to file
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("✅ Updated app.js successfully")

if __name__ == "__main__":
    print("🏞️  National Parks Data Extractor")
    print("=" * 50)
    
    try:
        # Extract parks from Wikipedia
        parks = extract_parks_from_wikipedia()
        
        if parks:
            # Save to JSON file
            save_parks_data(parks)
            
            # Update app.js
            update_app_js(parks)
            
            print(f"\n🎉 Successfully processed {len(parks)} national parks!")
            print("📱 Your app now has the complete official park data with images!")
        else:
            print("❌ No parks data extracted")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
