// National Parks Data with comprehensive list from Wikipedia
const nationalParks = [
    { name: "Acadia", state: "Maine44°21′N 68°13′W﻿ / ﻿44.35°N 68.21°W﻿ / 44.35; -68.21﻿ (Acadia)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bass_Harbor_Lighthouse_b.jpg/250px-Bass_Harbor_Lighthouse_b.jpg", description: "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. T..." },
    { name: "American Samoa", state: "American Samoa14°15′S 170°41′W﻿ / ﻿14.25°S 170.68°W﻿ / -14.25; -170.68﻿ (National Park of American Samoa)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Ofu_Beach_American_Samoa_US_National_Park_Service.jpg/250px-Ofu_Beach_American_Samoa_US_National_Park_Service.jpg", description: "The southernmost national park is on three Samoan islands in the South Pacific. It protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brow..." },
    { name: "Arches", state: "Utah38°41′N 109°34′W﻿ / ﻿38.68°N 109.57°W﻿ / 38.68; -109.57﻿ (Arches)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Delicate_Arch_sunset.jpg/250px-Delicate_Arch_sunset.jpg", description: "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have cre..." },
    { name: "Badlands", state: "South Dakota43°45′N 102°30′W﻿ / ﻿43.75°N 102.50°W﻿ / 43.75; -102.50﻿ (Badlands)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/MK00609_Badlands.jpg/250px-MK00609_Badlands.jpg", description: "The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies within the drainage basin of the White River, in southwestern South Dakota. They contain the largest known assembla..." },
    { name: "Big Bend", state: "Texas29°15′N 103°15′W﻿ / ﻿29.25°N 103.25°W﻿ / 29.25; -103.25﻿ (Big Bend)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/On_the_Border_%2839960085292%29.jpg/250px-On_the_Border_%2839960085292%29.jpg", description: "Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in th..." },
    { name: "Biscayne", state: "Florida25°39′N 80°05′W﻿ / ﻿25.65°N 80.08°W﻿ / 25.65; -80.08﻿ (Biscayne)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Biscayne_underwater_NPS1.jpg/250px-Biscayne_underwater_NPS1.jpg", description: "The central part of Biscayne Bay, this mostly underwater park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threate..." },
    { name: "Black Canyon of the Gunnison", state: "Colorado38°34′N 107°43′W﻿ / ﻿38.57°N 107.72°W﻿ / 38.57; -107.72﻿ (Black Canyon of the Gunnison)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_canyon_gunnison_Colorado.jpg/250px-Black_canyon_gunnison_Colorado.jpg", description: "The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and..." },
    { name: "Bryce Canyon", state: "Utah37°34′N 112°11′W﻿ / ﻿37.57°N 112.18°W﻿ / 37.57; -112.18﻿ (Bryce Canyon)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Inspiration_Point_Bryce_Canyon_November_2018_panorama.jpg/250px-Inspiration_Point_Bryce_Canyon_November_2018_panorama.jpg", description: "Bryce Canyon is a geological amphitheater on southern Utah's Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Am..." },
    { name: "Canyonlands", state: "Utah38°12′N 109°56′W﻿ / ﻿38.2°N 109.93°W﻿ / 38.2; -109.93﻿ (Canyonlands)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Ekker_Butte_from_Green_River_Overlook.jpg/250px-Ekker_Butte_from_Green_River_Overlook.jpg", description: "This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The p..." },
    { name: "Capitol Reef", state: "Utah38°12′N 111°10′W﻿ / ﻿38.20°N 111.17°W﻿ / 38.20; -111.17﻿ (Capitol Reef)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Capitol_Reef_National_Park.jpg/250px-Capitol_Reef_National_Park.jpg", description: "The park's Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth's diverse geologic layers. Other natural features include monoliths, eroded buttes, and sandstone domes, including ..." },
    { name: "Carlsbad Caverns", state: "New Mexico32°10′N 104°26′W﻿ / ﻿32.17°N 104.44°W﻿ / 32.17; -104.44﻿ (Carlsbad Caverns)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carlsbad_Interior_Formations.jpg/250px-Carlsbad_Interior_Formations.jpg", description: "Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats ..." },
    { name: "Channel Islands", state: "California34°01′N 119°25′W﻿ / ﻿34.01°N 119.42°W﻿ / 34.01; -119.42﻿ (Channel Islands)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Santa_Cruz_Island_CA_DSC_4323_ad.JPG/250px-Santa_Cruz_Island_CA_DSC_4323_ad.JPG", description: "Five of the eight Channel Islands are protected, with half of the park's area underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to o..." },
    { name: "Congaree", state: "South Carolina33°47′N 80°47′W﻿ / ﻿33.78°N 80.78°W﻿ / 33.78; -80.78﻿ (Congaree)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Baldcypress_%28Taxodium_distichum%29_on_Congaree_National_Park_Low_Boardwalk_trail.jpg/250px-Baldcypress_%28Taxodium_distichum%29_on_Congaree_National_Park_Low_Boardwalk_trail.jpg", description: "On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway calle..." },
    { name: "Crater Lake", state: "Oregon42°56′N 122°06′W﻿ / ﻿42.94°N 122.1°W﻿ / 42.94; -122.1﻿ (Crater Lake)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Aerial_Crater_Lake_%28cropped%29.jpg/250px-Aerial_Crater_Lake_%28cropped%29.jpg", description: "Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water c..." },
    { name: "Cuyahoga Valley", state: "Ohio41°14′N 81°33′W﻿ / ﻿41.24°N 81.55°W﻿ / 41.24; -81.55﻿ (Cuyahoga Valley)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cuyahoga_Valley_National_Park_20.jpg/250px-Cuyahoga_Valley_National_Park_20.jpg", description: "This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boa..." },
    { name: "Death Valley", state: "California, Nevada36°14′N 116°49′W﻿ / ﻿36.24°N 116.82°W﻿ / 36.24; -116.82﻿ (Death Valley)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Isolated_Desert.jpg/250px-Isolated_Desert.jpg", description: "Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats at the..." },
    { name: "Denali", state: "Alaska63°20′N 150°30′W﻿ / ﻿63.33°N 150.50°W﻿ / 63.33; -150.50﻿ (Denali)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonder_Lake_and_Denali.jpg/250px-Wonder_Lake_and_Denali.jpg", description: "Centered on Denali, the tallest and most prominent mountain in North America, the park is serviced by a single road leading to Wonder Lake, most of which can only be accessed via scheduled tour buses...." },
    { name: "Dry Tortugas", state: "Florida24°38′N 82°52′W﻿ / ﻿24.63°N 82.87°W﻿ / 24.63; -82.87﻿ (Dry Tortugas)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fort-Jefferson_Dry-Tortugas.jpg/250px-Fort-Jefferson_Dry-Tortugas.jpg", description: "The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Americas. The park is hom..." },
    { name: "Everglades", state: "Florida25°19′N 80°56′W﻿ / ﻿25.32°N 80.93°W﻿ / 25.32; -80.93﻿ (Everglades)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sunset_over_the_River_of_Grass%2C_NPSphoto%2C_G.Gardner_%289255157507%29.jpg/250px-Sunset_over_the_River_of_Grass%2C_NPSphoto%2C_G.Gardner_%289255157507%29.jpg", description: "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panth..." },
    { name: "Gates of the Arctic", state: "Alaska67°47′N 153°18′W﻿ / ﻿67.78°N 153.30°W﻿ / 67.78; -153.30﻿ (Gates of the Arctic)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg/250px-Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg", description: "The country's northernmost park protects an expanse of pure wilderness in Alaska's Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou f..." },
    { name: "Gateway Arch", state: "Missouri38°38′N 90°11′W﻿ / ﻿38.63°N 90.19°W﻿ / 38.63; -90.19﻿ (Gateway Arch)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/St_Louis_night_expblend.jpg/250px-St_Louis_night_expblend.jpg", description: "The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built in the 1960s to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward e..." },
    { name: "Glacier", state: "Montana48°48′N 114°00′W﻿ / ﻿48.80°N 114.00°W﻿ / 48.80; -114.00﻿ (Glacier)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mountain_Goat_at_Hidden_Lake.jpg/250px-Mountain_Goat_at_Hidden_Lake.jpg", description: "The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 rapidly receding glaciers and 130 named lakes surrounded by Rocky Mountain peaks. Historic hotels and the landmark Goi..." },
    { name: "Glacier Bay", state: "Alaska58°30′N 137°00′W﻿ / ﻿58.50°N 137.00°W﻿ / 58.50; -137.00﻿ (Glacier Bay)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Glacier_Bay_National_Park%2C_July_28%2C_2012.jpg/250px-Glacier_Bay_National_Park%2C_July_28%2C_2012.jpg", description: "Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in..." },
    { name: "Grand Canyon", state: "Arizona36°04′N 112°08′W﻿ / ﻿36.06°N 112.14°W﻿ / 36.06; -112.14﻿ (Grand Canyon)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg/250px-Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg", description: "The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have resulted in a massive ..." },
    { name: "Grand Teton", state: "Wyoming43°44′N 110°48′W﻿ / ﻿43.73°N 110.80°W﻿ / 43.73; -110.80﻿ (Grand Teton)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Barns_grand_tetons.jpg/250px-Barns_grand_tetons.jpg", description: "Grand Teton is the tallest mountain in the scenic Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise ..." },
    { name: "Great Basin", state: "Nevada38°59′N 114°18′W﻿ / ﻿38.98°N 114.30°W﻿ / 38.98; -114.30﻿ (Great Basin)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Upper_Lehman_Creek.jpg/250px-Upper_Lehman_Creek.jpg", description: "Based around Nevada's second tallest mountain, Wheeler Peak, Great Basin National Park protects 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote loca..." },
    { name: "Great Sand Dunes", state: "Colorado37°44′N 105°31′W﻿ / ﻿37.73°N 105.51°W﻿ / 37.73; -105.51﻿ (Great Sand Dunes)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sun_and_Shadow_Patterns_on_Dunes_%2828471118064%29.jpg/250px-Sun_and_Shadow_Patterns_on_Dunes_%2828471118064%29.jpg", description: "The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlan..." },
    { name: "Great Smoky Mountains", state: "North Carolina, Tennessee35°41′N 83°32′W﻿ / ﻿35.68°N 83.53°W﻿ / 35.68; -83.53﻿ (Great Smoky Mountains)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Foothills_Parkway%2C_November_2018--Joye_Ardyn_Durham_%2831031302587%29.jpg/250px-Foothills_Parkway%2C_November_2018--Joye_Ardyn_Durham_%2831031302587%29.jpg", description: "The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5,000 plant species. Hiking is the..." },
    { name: "Guadalupe Mountains", state: "Texas31°55′N 104°52′W﻿ / ﻿31.92°N 104.87°W﻿ / 31.92; -104.87﻿ (Guadalupe Mountains)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Guadalupe_Peak_from_Hunter_Peak.jpg/250px-Guadalupe_Peak_from_Hunter_Peak.jpg", description: "This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef ..." },
    { name: "Haleakalā", state: "Hawaii20°43′N 156°10′W﻿ / ﻿20.72°N 156.17°W﻿ / 20.72; -156.17﻿ (Haleakalā)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Haleakala_National_Park_02.jpg/250px-Haleakala_National_Park_02.jpg", description: "The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, a grove of non-native trees, the Kipahulu section's scenic pools of freshwater fish, and the endemic Hawaiian goo..." },
    { name: "Hawaiʻi Volcanoes", state: "Hawaii19°23′N 155°12′W﻿ / ﻿19.38°N 155.20°W﻿ / 19.38; -155.20﻿ (Hawaiʻi Volcanoes)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sulfur_dioxide_emissions_from_the_Halemaumau_vent_04-08-1_1.jpg/250px-Sulfur_dioxide_emissions_from_the_Halemaumau_vent_04-08-1_1.jpg", description: "This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world's most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava..." },
    { name: "Hot Springs", state: "Arkansas34°31′N 93°03′W﻿ / ﻿34.51°N 93.05°W﻿ / 34.51; -93.05﻿ (Hot Springs)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Steamy_Entrance_Springs_on_Cold_Night_in_Hot_Springs_National_Park.jpg/250px-Steamy_Entrance_Springs_on_Cold_Night_in_Hot_Springs_National_Park.jpg", description: "Hot Springs was originally established by Congress as a federal reserve on April 20, 1832, making it the oldest area managed by the National Park Service. Natural thermal springs flow out of the Ouach..." },
    { name: "Indiana Dunes", state: "Indiana41°39′12″N 87°03′09″W﻿ / ﻿41.6533°N 87.0524°W﻿ / 41.6533; -87.0524﻿ (Indiana Dunes)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg/250px-2010-11-26_3060x2040_portage_indiana_dunes.jpg", description: "Previously designated a national lakeshore, parts of this 20-mile (32 km) stretch of the southern shore of Lake Michigan have sandy beaches and tall dunes. The park includes grassy prairies, peat bogs..." },
    { name: "Isle Royale", state: "Michigan48°06′N 88°33′W﻿ / ﻿48.10°N 88.55°W﻿ / 48.10; -88.55﻿ (Isle Royale)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IsleRoyalePlane.jpg/250px-IsleRoyalePlane.jpg", description: "The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 mil..." },
    { name: "Joshua Tree", state: "California33°47′N 115°54′W﻿ / ﻿33.79°N 115.90°W﻿ / 33.79; -115.90﻿ (Joshua Tree)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg/250px-Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg", description: "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal va..." },
    { name: "Katmai", state: "Alaska58°30′N 155°00′W﻿ / ﻿58.50°N 155.00°W﻿ / 58.50; -155.00﻿ (Katmai)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grizzly_mama_bear_with_spring_cubs._Naknek_Lake%2C_Katmai_National_Park%2C_Alaska.jpg/250px-Grizzly_mama_bear_with_spring_cubs._Naknek_Lake%2C_Katmai_National_Park%2C_Alaska.jpg", description: "This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, and the stratovolcano Mount Katmai. Over 2,000 grizzly bears come he..." },
    { name: "Kenai Fjords", state: "Alaska59°55′N 149°39′W﻿ / ﻿59.92°N 149.65°W﻿ / 59.92; -149.65﻿ (Kenai Fjords)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/KENAI_FJORDS_NATIONAL_PARK%2C_ALASKA_--_NORTHWEST_GLACIER.jpg/250px-KENAI_FJORDS_NATIONAL_PARK%2C_ALASKA_--_NORTHWEST_GLACIER.jpg", description: "Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is the rapidly shrinkin..." },
    { name: "Kings Canyon", state: "California36°48′N 118°33′W﻿ / ﻿36.80°N 118.55°W﻿ / 36.80; -118.55﻿ (Kings Canyon)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/KingsCanyonNP.JPG/250px-KingsCanyonNP.JPG", description: "Home to several giant sequoia groves and the General Grant Tree, the world's second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that..." },
    { name: "Kobuk Valley", state: "Alaska67°33′N 159°17′W﻿ / ﻿67.55°N 159.28°W﻿ / 67.55; -159.28﻿ (Kobuk Valley)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wetlands_along_the_Kobuk_River_%288029770162%29.jpg/250px-Wetlands_along_the_Kobuk_River_%288029770162%29.jpg", description: "Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high ..." },
    { name: "Lake Clark", state: "Alaska60°58′N 153°25′W﻿ / ﻿60.97°N 153.42°W﻿ / 60.97; -153.42﻿ (Lake Clark)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lake_Clark_National_Park.jpg/250px-Lake_Clark_National_Park.jpg", description: "The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mo..." },
    { name: "Lassen Volcanic", state: "California40°29′N 121°31′W﻿ / ﻿40.49°N 121.51°W﻿ / 40.49; -121.51﻿ (Lassen Volcanic)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Lassen_Peak_and_Lake_Helen.jpg/250px-Lassen_Peak_and_Lake_Helen.jpg", description: "Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, mo..." },
    { name: "Mammoth Cave", state: "Kentucky37°11′N 86°06′W﻿ / ﻿37.18°N 86.10°W﻿ / 37.18; -86.10﻿ (Mammoth Cave)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mammoth_Cave_National_Park_007.jpg/250px-Mammoth_Cave_National_Park_007.jpg", description: "With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world's longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavef..." },
    { name: "Mesa Verde", state: "Colorado37°11′N 108°29′W﻿ / ﻿37.18°N 108.49°W﻿ / 37.18; -108.49﻿ (Mesa Verde)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mesa_Verde_National_Park_Cliff_Palace_2006_09_12.jpg/250px-Mesa_Verde_National_Park_Cliff_Palace_2006_09_12.jpg", description: "This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12t..." },
    { name: "Mount Rainier", state: "Washington46°51′N 121°45′W﻿ / ﻿46.85°N 121.75°W﻿ / 46.85; -121.75﻿ (Mount Rainier)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mount_Rainier_from_above_Myrtle_Falls_in_August.JPG/250px-Mount_Rainier_from_above_Myrtle_Falls_in_August.JPG", description: "Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the longest and largest in the conti..." },
    { name: "New River Gorge", state: "West Virginia38°04′N 81°05′W﻿ / ﻿38.07°N 81.08°W﻿ / 38.07; -81.08﻿ (New River Gorge)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_River_Gorge_Bridge.jpg/250px-New_River_Gorge_Bridge.jpg", description: "The New River Gorge is the deepest river gorge east of the Mississippi River. The park primarily covers the lower gorge area around the New River Gorge Bridge, which features some of the country's bes..." },
    { name: "North Cascades", state: "Washington48°42′N 121°12′W﻿ / ﻿48.70°N 121.20°W﻿ / 48.70; -121.20﻿ (North Cascades)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cascade_Pass.jpg/250px-Cascade_Pass.jpg", description: "The highly glaciated mountains of the North Cascades Range exhibit a spectacular and complex geologic history. Between the river valleys and high peaks there are eight diverse life zones with 75 mamma..." },
    { name: "Olympic", state: "Washington47°58′N 123°30′W﻿ / ﻿47.97°N 123.50°W﻿ / 47.97; -123.50﻿ (Olympic)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cedar_Creek_Abbey_Island_Ruby_Beach.jpg/250px-Cedar_Creek_Abbey_Island_Ruby_Beach.jpg", description: "This park on the Olympic Peninsula includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the glaciated alpine peaks of the Olympic Mountains, the tallest of which is M..." },
    { name: "Petrified Forest", state: "Arizona35°04′N 109°47′W﻿ / ﻿35.07°N 109.78°W﻿ / 35.07; -109.78﻿ (Petrified Forest)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Jasper_Forest_at_Petrified_Forest_NP_in_AZ_12.jpg/250px-Jasper_Forest_at_Petrified_Forest_NP_in_AZ_12.jpg", description: "This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite...." },
    { name: "Pinnacles", state: "California36°29′N 121°10′W﻿ / ﻿36.48°N 121.16°W﻿ / 36.48; -121.16﻿ (Pinnacles)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinnacles_National_Park.jpg/250px-Pinnacles_National_Park.jpg", description: "Named for the eroded leftovers of a portion of an extinct volcano, the park's massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access ..." },
    { name: "Rocky Mountain", state: "Colorado40°24′N 105°35′W﻿ / ﻿40.40°N 105.58°W﻿ / 40.40; -105.58﻿ (Rocky Mountain)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg/250px-Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg", description: "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife ..." },
    { name: "Saguaro", state: "Arizona32°15′N 110°30′W﻿ / ﻿32.25°N 110.50°W﻿ / 32.25; -110.50﻿ (Saguaro)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saguaronationalparl17102008.jpg/250px-Saguaronationalparl17102008.jpg", description: "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyon..." },
    { name: "Sequoia", state: "California36°26′N 118°41′W﻿ / ﻿36.43°N 118.68°W﻿ / 36.43; -118.68﻿ (Sequoia)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sequoia_National_Park%2C_photo_by_Reeve_Bruner%2C_2016.jpg/250px-Sequoia_National_Park%2C_photo_by_Reeve_Bruner%2C_2016.jpg", description: "This park protects the Giant Forest, which boasts some of the world's largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segm..." },
    { name: "Shenandoah", state: "Virginia38°32′N 78°21′W﻿ / ﻿38.53°N 78.35°W﻿ / 38.53; -78.35﻿ (Shenandoah)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg/250px-Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg", description: "Shenandoah's Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along wi..." },
    { name: "Theodore Roosevelt", state: "North Dakota46°58′N 103°27′W﻿ / ﻿46.97°N 103.45°W﻿ / 46.97; -103.45﻿ (Theodore Roosevelt)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/View_of_Theodore_Roosevelt_National_Park.jpg/250px-View_of_Theodore_Roosevelt_National_Park.jpg", description: "This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt's historic cabin, there are numerous scenic drives an..." },
    { name: "Virgin Islands", state: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St_John_Trunk_Bay_1.jpg/250px-St_John_Trunk_Bay_1.jpg", description: "This island park on Saint John preserves pristine beaches surrounded by mangrove forests, seagrass beds, and coral reefs. It also has Taíno archaeological sites and the ruins of sugar plantations from..." },
    { name: "Voyageurs", state: "Minnesota48°30′N 92°53′W﻿ / ﻿48.50°N 92.88°W﻿ / 48.50; -92.88﻿ (Voyageurs)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Voyageurs_National_Park.jpg/250px-Voyageurs_National_Park.jpg", description: "This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders call..." },
    { name: "White Sands", state: "New Mexico32°47′N 106°10′W﻿ / ﻿32.78°N 106.17°W﻿ / 32.78; -106.17﻿ (White Sands)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/White_Sands_New_Mexico_USA.jpg/250px-White_Sands_New_Mexico_USA.jpg", description: "Located in the mountain-ringed Tularosa Basin, White Sands consists of the southern part of a 275-square-mile (710 km2) field of white sand dunes composed of gypsum crystals—the world's largest gypsum..." },
    { name: "Wind Cave", state: "South Dakota43°34′N 103°29′W﻿ / ﻿43.57°N 103.48°W﻿ / 43.57; -103.48﻿ (Wind Cave)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Skyway_Lake%2C_stalactites%2C_Wind_Cave.jpg/250px-Skyway_Lake%2C_stalactites%2C_Wind_Cave.jpg", description: "Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. It is one of the longest caves in the world..." },
    { name: "Wrangell–St. Elias", state: "Alaska61°00′N 142°00′W﻿ / ﻿61.00°N 142.00°W﻿ / 61.00; -142.00﻿ (Wrangell – St. Elias)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Guyot_Hills%2C_Icy_Bay%2C_and_Mount_St._Elias_%2821601563492%29.jpg/250px-Guyot_Hills%2C_Icy_Bay%2C_and_Mount_St._Elias_%2821601563492%29.jpg", description: "The largest national park in the system protects the convergence of the Alaska, Chugach, Wrangell, and Saint Elias Ranges, which include many of the continent's tallest mountains and volcanoes, includ..." },
    { name: "Yellowstone", state: "Wyoming, Montana, Idaho44°36′N 110°30′W﻿ / ﻿44.60°N 110.50°W﻿ / 44.60; -110.50﻿ (Yellowstone)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Grand_Prismatic_Spring_2013.jpg/250px-Grand_Prismatic_Spring_2013.jpg", description: "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly eruptin..." },
    { name: "Yosemite", state: "California37°50′N 119°30′W﻿ / ﻿37.83°N 119.50°W﻿ / 37.83; -119.50﻿ (Yosemite)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/250px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg", description: "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpie..." },
    { name: "Zion", state: "Utah37°18′N 113°03′W﻿ / ﻿37.30°N 113.05°W﻿ / 37.30; -113.05﻿ (Zion)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zion_angels_landing_view.jpg/250px-Zion_angels_landing_view.jpg", description: "Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The ..." },
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
        
        const iconElement = element.querySelector('.park-icon');
        if (park.image && park.image !== 'null') {
            iconElement.innerHTML = `<img src="${park.image}" alt="${park.name}" class="park-icon">`;
        } else {
            // Fallback to emoji if no image
            const emoji = this.getParkEmoji(park.name);
            iconElement.innerHTML = `<div style="font-size: 3rem; display: flex; align-items: center; justify-content: center; height: 80px;">${emoji}</div>`;
        }
        
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
            
            const parkImageHtml = park.image && park.image !== 'null' 
                ? `<img src="${park.image}" alt="${park.name}" class="park-emoji" style="width: 24px; height: 24px; border-radius: 4px; object-fit: cover;">` 
                : `<span class="park-emoji">${this.getParkEmoji(park.name)}</span>`;
            
            row.innerHTML = `
                <span class="rank-number">${index + 1}</span>
                <div class="park-info">
                    ${parkImageHtml}
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

    getParkEmoji(parkName) {
        // Fallback emojis for parks without images
        const emojiMap = {
            'Acadia': '🌲', 'American Samoa': '🏝️', 'Arches': '🪨', 'Badlands': '🏜️',
            'Big Bend': '🌵', 'Biscayne': '🐠', 'Black Canyon of the Gunnison': '⛰️',
            'Bryce Canyon': '🧡', 'Canyonlands': '🏔️', 'Capitol Reef': '🏛️',
            'Carlsbad Caverns': '🦇', 'Channel Islands': '🏖️', 'Congaree': '🌳',
            'Crater Lake': '🌊', 'Cuyahoga Valley': '🚂', 'Death Valley': '☀️',
            'Denali': '🏔️', 'Dry Tortugas': '🏰', 'Everglades': '🐊',
            'Gates of the Arctic': '🌌', 'Gateway Arch': '🌉', 'Glacier': '❄️',
            'Glacier Bay': '🧊', 'Grand Canyon': '🏜️', 'Grand Teton': '⛰️',
            'Great Basin': '🌲', 'Great Sand Dunes': '🏔️', 'Great Smoky Mountains': '🌲',
            'Guadalupe Mountains': '🏔️', 'Haleakalā': '🌺', 'Hawaiʻi Volcanoes': '🌋',
            'Hot Springs': '♨️', 'Indiana Dunes': '🏖️', 'Isle Royale': '🐺',
            'Joshua Tree': '🌵', 'Katmai': '🐻', 'Kenai Fjords': '🐋',
            'Kings Canyon': '🌲', 'Kobuk Valley': '🦌', 'Lake Clark': '🏔️',
            'Lassen Volcanic': '🌋', 'Mammoth Cave': '🕳️', 'Mesa Verde': '🏛️',
            'Mount Rainier': '🏔️', 'New River Gorge': '🌉', 'North Cascades': '⛰️',
            'Olympic': '🌲', 'Petrified Forest': '🪨', 'Pinnacles': '🦅',
            'Rocky Mountain': '🏔️', 'Saguaro': '🌵', 'Sequoia': '🌲',
            'Shenandoah': '🍂', 'Theodore Roosevelt': '🦬', 'Virgin Islands': '🏝️',
            'Voyageurs': '🛶', 'White Sands': '🤍', 'Wind Cave': '🕳️',
            'Wrangell-St. Elias': '🏔️', 'Yellowstone': '🌋', 'Yosemite': '🏔️', 'Zion': '🏜️'
        };
        return emojiMap[parkName] || '🏞️';
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
