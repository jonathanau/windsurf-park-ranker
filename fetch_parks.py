#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import json
import re

def fetch_parks_data():
    """Fetch and parse national parks data from Wikipedia."""
    url = "https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States"
    
    print("🌐 Fetching Wikipedia page...")
    response = requests.get(url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the main table with parks data
    # The table should be the sortable table with park information
    table = soup.find('table', {'class': 'wikitable'})
    if not table:
        # Try finding any table that contains park data
        tables = soup.find_all('table')
        for t in tables:
            if t.find('th') and 'park' in str(t).lower():
                table = t
                break
    
    if not table:
        raise ValueError("Could not find the parks table on the Wikipedia page")
    
    print("📊 Parsing parks table...")
    parks = []
    rows = table.find_all('tr')[1:]  # Skip header row
    
    for row in rows:
        cells = row.find_all(['td', 'th'])
        if len(cells) < 4:  # Skip rows that don't have enough data
            continue
            
        try:
            # Extract park name (usually in first or second cell)
            name_cell = None
            for cell in cells[:3]:
                links = cell.find_all('a')
                for link in links:
                    if link.get('title') and 'National Park' in link.get('title', ''):
                        name_cell = cell
                        break
                if name_cell:
                    break
            
            if not name_cell:
                continue
                
            # Get park name
            park_link = name_cell.find('a')
            if not park_link:
                continue
                
            park_name = park_link.get_text().strip()
            # Clean up the name (remove "National Park" suffix if present)
            park_name = re.sub(r'\s+National Park.*$', '', park_name)
            
            # Get image URL - search all cells for an image
            image_url = None
            for cell in cells:
                img = cell.find('img')
                if img and img.get('src'):
                    image_url = img['src']
                    # Convert to full URL if it's a relative path
                    if image_url.startswith('//'):
                        image_url = 'https:' + image_url
                    elif image_url.startswith('/'):
                        image_url = 'https://en.wikipedia.org' + image_url
                    break
            
            # Get location/state (usually in one of the middle cells)
            location = ""
            for cell in cells[1:4]:
                text = cell.get_text().strip()
                if any(state in text for state in ['Alaska', 'California', 'Colorado', 'Utah', 'Arizona', 'Wyoming', 'Montana', 'Washington', 'Oregon', 'Nevada', 'New Mexico', 'Texas', 'Florida', 'Hawaii', 'Maine', 'Virginia', 'North Carolina', 'Tennessee', 'South Carolina', 'Kentucky', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'South Dakota', 'Arkansas', 'Missouri', 'Indiana', 'West Virginia', 'American Samoa', 'US Virgin Islands']):
                    location = text
                    break
            
            # Get description (usually in the last cell or cells)
            description = ""
            desc_cell = cells[-1] if len(cells) > 3 else cells[-2] if len(cells) > 2 else None
            if desc_cell:
                description = desc_cell.get_text().strip()
                # Clean up description
                description = re.sub(r'\[\d+\]', '', description)  # Remove citation numbers
                description = ' '.join(description.split())  # Normalize whitespace
                if len(description) > 200:
                    description = description[:200] + "..."
            
            if park_name and len(park_name) > 2:  # Valid park name
                park_data = {
                    'name': park_name,
                    'state': location,
                    'image': image_url,
                    'description': description or f"Beautiful national park located in {location}"
                }
                parks.append(park_data)
                print(f"✅ Found: {park_name} ({location})")
        
        except Exception as e:
            print(f"⚠️  Error parsing row: {e}")
            continue
    
    print(f"\n🎉 Successfully extracted {len(parks)} parks!")
    return parks

def update_app_data(parks_data):
    """Update the app.js file with the new parks data."""
    print("📝 Updating app.js with new parks data...")
    
    # Read the current app.js file
    with open('app.js', 'r') as f:
        content = f.read()
    
    # Create the new parks array
    parks_js = "const nationalParks = [\n"
    for park in parks_data:
        # Escape quotes in strings
        name = park['name'].replace('"', '\\"')
        state = park['state'].replace('"', '\\"')
        description = park['description'].replace('"', '\\"')
        image = park['image'] or ""
        
        parks_js += f'    {{ name: "{name}", state: "{state}", image: "{image}", description: "{description}" }},\n'
    parks_js += "];\n"
    
    # Replace the existing nationalParks array
    import re
    pattern = r'const nationalParks = \[.*?\];'
    new_content = re.sub(pattern, parks_js.strip(), content, flags=re.DOTALL)
    
    # Write back to file
    with open('app.js', 'w') as f:
        f.write(new_content)
    
    print("✅ App.js updated successfully!")

def main():
    try:
        parks = fetch_parks_data()
        
        # Save to JSON file for reference
        with open('parks_data.json', 'w') as f:
            json.dump(parks, f, indent=2)
        print(f"💾 Saved parks data to parks_data.json")
        
        # Update the app
        update_app_data(parks)
        
        print(f"\n🎯 Total parks found: {len(parks)}")
        if len(parks) != 63:
            print(f"⚠️  Expected 63 parks, but found {len(parks)}")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main())
