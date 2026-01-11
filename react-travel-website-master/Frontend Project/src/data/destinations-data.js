const destinationsData = [
    {
        id: "goa",
        name: "Goa",
        country: "India",
        state: "Goa",
        type: "Beach",
        shortDescription: "Sun, sand, and sea paradise with vibrant nightlife",
        description: "Goa is India's smallest state by area and is located on the western coast. Known for its pristine beaches, Portuguese heritage, vibrant nightlife, and water sports, Goa is a perfect blend of Indian and Portuguese cultures. From the bustling beaches of North Goa to the serene shores of South Goa, this coastal paradise offers something for every traveler.",
        image: "/images/destination-img01.jpeg",
        bannerImage: "/images/img-1.jpg",
        bestTime: "November to February",
        attractions: [
            {
                name: "Baga Beach",
                type: "Beach",
                description: "Famous for water sports and vibrant nightlife",
                image: "/images/attractions/baga-beach.jpg"
            },
            {
                name: "Fort Aguada",
                type: "Monument",
                description: "17th-century Portuguese fort with stunning sea views",
                image: "/images/attractions/fort-aguada.jpg"
            },
            {
                name: "Dudhsagar Falls",
                type: "Nature",
                description: "Majestic four-tiered waterfall in the Western Ghats",
                image: "/images/attractions/dudhsagar.jpg"
            },
            {
                name: "Basilica of Bom Jesus",
                type: "Heritage",
                description: "UNESCO World Heritage Site housing St. Francis Xavier's remains",
                image: "/images/attractions/bom-jesus.jpg"
            }
        ],
        food: ["Seafood", "Fish Curry Rice", "Bebinca", "Prawn Balchão", "Vindaloo"],
        culture: "Goa's culture is a unique blend of Indian and Portuguese influences, evident in its architecture, cuisine, and festivals. The state celebrates both Hindu festivals like Ganesh Chaturthi and Christian festivals like Christmas with equal fervor. Traditional Goan music, dance forms like Dekhnni and Fugdi, and the famous Carnival showcase the vibrant cultural heritage.",
        budget: { low: 5000, medium: 15000, high: 30000 },
        coordinates: { lat: 15.2993, lng: 74.1240 }
    },
    {
        id: "jaipur",
        name: "Jaipur",
        country: "India",
        state: "Rajasthan",
        type: "Heritage",
        shortDescription: "The Pink City with royal palaces and forts",
        description: "Jaipur, the capital of Rajasthan, is known as the Pink City due to the distinctive color of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, this planned city is a treasure trove of magnificent forts, opulent palaces, and vibrant bazaars. The city perfectly blends royal heritage with modern development.",
        image: "/images/destination-img02.jpeg",
        bannerImage: "/images/img-2.jpg",
        bestTime: "October to March",
        attractions: [
            {
                name: "Hawa Mahal",
                type: "Monument",
                description: "Iconic palace with 953 windows",
                image: "/images/attractions/hawa-mahal.jpg"
            },
            {
                name: "Amber Fort",
                type: "Fort",
                description: "Magnificent hilltop fort with stunning architecture",
                image: "/images/attractions/amber-fort.jpg"
            },
            {
                name: "City Palace",
                type: "Palace",
                description: "Royal residence with museums and courtyards",
                image: "/images/attractions/city-palace.jpg"
            },
            {
                name: "Jantar Mantar",
                type: "Heritage",
                description: "UNESCO World Heritage astronomical observatory",
                image: "/images/attractions/jantar-mantar.jpg"
            }
        ],
        food: ["Dal Baati Churma", "Laal Maas", "Ghewar", "Pyaaz Kachori", "Ker Sangri"],
        culture: "Jaipur's culture reflects the royal Rajput heritage with colorful festivals, traditional folk music and dance like Ghoomar and Kalbelia, and exquisite handicrafts. The city is famous for block printing, blue pottery, and precious stone jewelry. Festivals like Teej and Gangaur are celebrated with great enthusiasm.",
        budget: { low: 4000, medium: 12000, high: 25000 },
        coordinates: { lat: 26.9124, lng: 75.7873 }
    },
    {
        id: "manali",
        name: "Manali",
        country: "India",
        state: "Himachal Pradesh",
        type: "Hill Station",
        shortDescription: "Himalayan paradise for adventure and serenity",
        description: "Nestled in the Kullu Valley of Himachal Pradesh, Manali is a high-altitude Himalayan resort town famous for its cool climate, snow-capped mountains, and adventure activities. From ancient temples to thrilling skiing slopes, Manali offers a perfect blend of natural beauty and adventure sports.",
        image: "/images/destination-img03.jpeg",
        bannerImage: "/images/img-3.jpg",
        bestTime: "October to February (snow), March to June (pleasant weather)",
        attractions: [
            {
                name: "Rohtang Pass",
                type: "Mountain",
                description: "High mountain pass with snow activities",
                image: "/images/attractions/rohtang.jpg"
            },
            {
                name: "Solang Valley",
                type: "Adventure",
                description: "Hub for skiing, paragliding, and zorbing",
                image: "/images/attractions/solang.jpg"
            },
            {
                name: "Hadimba Temple",
                type: "Temple",
                description: "Ancient cave temple in cedar forest",
                image: "/images/attractions/hadimba.jpg"
            },
            {
                name: "Old Manali",
                type: "Village",
                description: "Charming village with cafes and hippie culture",
                image: "/images/attractions/old-manali.jpg"
            }
        ],
        food: ["Siddu", "Thukpa", "Momos", "Trout Fish", "Madra"],
        culture: "Manali's culture is deeply rooted in Himalayan traditions with influences from Tibetan Buddhism. The region celebrates festivals like Dussehra with unique rituals, and the local Kullu shawls and handicrafts are world-renowned. The area is also known for its apple orchards and traditional wooden architecture.",
        budget: { low: 6000, medium: 18000, high: 35000 },
        coordinates: { lat: 32.2396, lng: 77.1887 }
    },
    {
        id: "kerala",
        name: "Kerala",
        country: "India",
        state: "Kerala",
        type: "Nature",
        shortDescription: "God's Own Country with backwaters and beaches",
        description: "Kerala, located on India's southwestern coast, is known for its palm-lined beaches, backwaters, hill stations, and Ayurvedic treatments. The state offers a unique blend of natural beauty, rich cultural heritage, and diverse wildlife. From the serene backwaters of Alleppey to the tea plantations of Munnar, Kerala is a tropical paradise.",
        image: "/images/destination-img04.jpeg",
        bannerImage: "/images/img-4.jpg",
        bestTime: "September to March",
        attractions: [
            {
                name: "Alleppey Backwaters",
                type: "Nature",
                description: "Houseboat cruises through scenic canals",
                image: "/images/attractions/alleppey.jpg"
            },
            {
                name: "Munnar Tea Gardens",
                type: "Hill Station",
                description: "Sprawling tea plantations in misty hills",
                image: "/images/attractions/munnar.jpg"
            },
            {
                name: "Periyar Wildlife Sanctuary",
                type: "Wildlife",
                description: "Tiger reserve with elephant sightings",
                image: "/images/attractions/periyar.jpg"
            },
            {
                name: "Kovalam Beach",
                type: "Beach",
                description: "Crescent-shaped beach with lighthouse",
                image: "/images/attractions/kovalam.jpg"
            }
        ],
        food: ["Appam with Stew", "Puttu", "Fish Molee", "Sadya", "Kerala Parotta"],
        culture: "Kerala's culture is characterized by classical art forms like Kathakali dance and Mohiniyattam, traditional festivals like Onam and Thrissur Pooram, and ancient martial art Kalaripayattu. The state is known for its high literacy rate, matrilineal traditions, and harmonious coexistence of different religions.",
        budget: { low: 7000, medium: 20000, high: 40000 },
        coordinates: { lat: 10.8505, lng: 76.2711 }
    },
    {
        id: "udaipur",
        name: "Udaipur",
        country: "India",
        state: "Rajasthan",
        type: "Heritage",
        shortDescription: "City of Lakes with romantic palaces",
        description: "Udaipur, often called the 'Venice of the East,' is a city of lakes, palaces, and romantic settings. Founded in 1559 by Maharana Udai Singh II, this city is known for its stunning white marble palaces, serene lakes, and rich cultural heritage. The City Palace complex and Lake Pichola create a magical ambiance.",
        image: "/images/destination-img05.jpeg",
        bannerImage: "/images/img-5.jpg",
        bestTime: "September to March",
        attractions: [
            {
                name: "Lake Pichola",
                type: "Lake",
                description: "Artificial lake with palace islands",
                image: "/images/attractions/pichola.jpg"
            },
            {
                name: "City Palace Udaipur",
                type: "Palace",
                description: "Magnificent palace complex overlooking the lake",
                image: "/images/attractions/udaipur-palace.jpg"
            },
            {
                name: "Jag Mandir",
                type: "Palace",
                description: "Island palace on Lake Pichola",
                image: "/images/attractions/jag-mandir.jpg"
            },
            {
                name: "Saheliyon Ki Bari",
                type: "Garden",
                description: "Garden of maidens with fountains",
                image: "/images/attractions/saheliyon.jpg"
            }
        ],
        food: ["Dal Baati Churma", "Gatte ki Sabzi", "Mawa Kachori", "Laal Maas", "Mirchi Bada"],
        culture: "Udaipur's culture reflects royal Mewar traditions with miniature paintings, folk music, and traditional dances. The city hosts cultural events like the Mewar Festival and is known for its handicrafts including miniature paintings, silver jewelry, and traditional textiles.",
        budget: { low: 5000, medium: 15000, high: 30000 },
        coordinates: { lat: 24.5854, lng: 73.7125 }
    },
    {
        id: "varanasi",
        name: "Varanasi",
        country: "India",
        state: "Uttar Pradesh",
        type: "Heritage",
        shortDescription: "Ancient spiritual city on the Ganges",
        description: "Varanasi, also known as Kashi or Benares, is one of the world's oldest continuously inhabited cities. Situated on the banks of the holy Ganges River, this spiritual capital of India is a major pilgrimage site for Hindus. The city is known for its ghats, temples, silk weaving, and profound spiritual atmosphere.",
        image: "/images/destination-img06.jpeg",
        bannerImage: "/images/img-6.jpg",
        bestTime: "October to March",
        attractions: [
            {
                name: "Dashashwamedh Ghat",
                type: "Ghat",
                description: "Main ghat with evening Ganga Aarti",
                image: "/images/attractions/dashashwamedh.jpg"
            },
            {
                name: "Kashi Vishwanath Temple",
                type: "Temple",
                description: "Sacred Shiva temple, one of 12 Jyotirlingas",
                image: "/images/attractions/vishwanath.jpg"
            },
            {
                name: "Sarnath",
                type: "Heritage",
                description: "Buddhist pilgrimage site where Buddha gave first sermon",
                image: "/images/attractions/sarnath.jpg"
            },
            {
                name: "Assi Ghat",
                type: "Ghat",
                description: "Southern ghat popular for morning rituals",
                image: "/images/attractions/assi.jpg"
            }
        ],
        food: ["Kachori Sabzi", "Banarasi Paan", "Malaiyo", "Chaat", "Banarasi Thandai"],
        culture: "Varanasi is the cultural and spiritual heart of India, known for classical music, especially the Benares Gharana, and traditional silk weaving. The city's culture revolves around spirituality, with daily rituals on the ghats, classical music performances, and ancient traditions that have been preserved for millennia.",
        budget: { low: 3000, medium: 10000, high: 20000 },
        coordinates: { lat: 25.3176, lng: 82.9739 }
    },
    {
        id: "paris",
        name: "Paris",
        country: "France",
        state: "Île-de-France",
        type: "Heritage",
        shortDescription: "City of Light with art, fashion, and romance",
        description: "Paris, the capital of France, is one of the world's most iconic cities. Known for its art, fashion, gastronomy, and culture, Paris attracts millions of visitors annually. From the Eiffel Tower to the Louvre Museum, from charming cafés to haute couture boutiques, Paris embodies elegance and romance.",
        image: "/images/destination-img07.jpeg",
        bannerImage: "/images/img-7.jpg",
        bestTime: "April to June, September to October",
        attractions: [
            {
                name: "Eiffel Tower",
                type: "Monument",
                description: "Iconic iron lattice tower and symbol of Paris",
                image: "/images/attractions/eiffel.jpg"
            },
            {
                name: "Louvre Museum",
                type: "Museum",
                description: "World's largest art museum, home to Mona Lisa",
                image: "/images/attractions/louvre.jpg"
            },
            {
                name: "Notre-Dame Cathedral",
                type: "Cathedral",
                description: "Medieval Catholic cathedral with Gothic architecture",
                image: "/images/attractions/notre-dame.jpg"
            },
            {
                name: "Champs-Élysées",
                type: "Avenue",
                description: "Famous avenue with shops, cafés, and Arc de Triomphe",
                image: "/images/attractions/champs-elysees.jpg"
            }
        ],
        food: ["Croissants", "Escargots", "Coq au Vin", "Crème Brûlée", "Macarons"],
        culture: "Paris is the global center of art, fashion, and culture. The city has been home to countless artists, writers, and philosophers. French café culture, haute couture fashion, world-class museums, and classical music concerts define Parisian lifestyle. The city celebrates Bastille Day and hosts Fashion Week.",
        budget: { low: 80000, medium: 200000, high: 400000 },
        coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
        id: "bali",
        name: "Bali",
        country: "Indonesia",
        state: "Bali",
        type: "Beach",
        shortDescription: "Island paradise with temples and tropical beauty",
        description: "Bali, the Island of the Gods, is Indonesia's most famous island destination. Known for its forested volcanic mountains, iconic rice paddies, beaches, coral reefs, and spiritual Hindu culture, Bali offers a perfect blend of natural beauty, adventure, and tranquility. The island's unique culture and warm hospitality make it a favorite among travelers.",
        image: "/images/destination-img08.jpeg",
        bannerImage: "/images/img-8.jpg",
        bestTime: "April to October",
        attractions: [
            {
                name: "Tanah Lot Temple",
                type: "Temple",
                description: "Ancient Hindu shrine on rock formation in sea",
                image: "/images/attractions/tanah-lot.jpg"
            },
            {
                name: "Ubud Rice Terraces",
                type: "Nature",
                description: "Stunning terraced rice paddies",
                image: "/images/attractions/ubud-rice.jpg"
            },
            {
                name: "Seminyak Beach",
                type: "Beach",
                description: "Upscale beach area with resorts and dining",
                image: "/images/attractions/seminyak.jpg"
            },
            {
                name: "Sacred Monkey Forest",
                type: "Nature",
                description: "Sanctuary with hundreds of long-tailed macaques",
                image: "/images/attractions/monkey-forest.jpg"
            }
        ],
        food: ["Nasi Goreng", "Satay", "Babi Guling", "Lawar", "Pisang Goreng"],
        culture: "Bali's culture is deeply rooted in Hinduism with unique Balinese traditions. Daily offerings, temple ceremonies, traditional dances like Barong and Kecak, and gamelan music are integral to life. The island is known for its arts and crafts, including wood carving, painting, and silver work.",
        budget: { low: 40000, medium: 100000, high: 250000 },
        coordinates: { lat: -8.3405, lng: 115.0920 }
    },
    {
        id: "maldives",
        name: "Maldives",
        country: "Maldives",
        state: "Malé",
        type: "Beach",
        shortDescription: "Tropical paradise with luxury resorts and coral reefs",
        description: "The Maldives is a tropical paradise in the Indian Ocean, consisting of 26 ring-shaped atolls made up of over 1,000 coral islands. Known for its crystal-clear waters, vibrant coral reefs, luxury overwater bungalows, and world-class diving, the Maldives is the ultimate destination for beach lovers and honeymooners.",
        image: "/images/destination-img09.jpeg",
        bannerImage: "/images/img-9.jpg",
        bestTime: "November to April",
        attractions: [
            {
                name: "Malé City",
                type: "City",
                description: "Capital city with markets and mosques",
                image: "/images/attractions/male.jpg"
            },
            {
                name: "Banana Reef",
                type: "Diving",
                description: "Famous diving spot with diverse marine life",
                image: "/images/attractions/banana-reef.jpg"
            },
            {
                name: "Vaadhoo Island",
                type: "Beach",
                description: "Beach with bioluminescent plankton",
                image: "/images/attractions/vaadhoo.jpg"
            },
            {
                name: "HP Reef",
                type: "Diving",
                description: "Excellent spot for manta ray encounters",
                image: "/images/attractions/hp-reef.jpg"
            }
        ],
        food: ["Mas Huni", "Garudhiya", "Fihunu Mas", "Bis Keemiya", "Saagu Bondibai"],
        culture: "Maldivian culture is influenced by South Indian, Sinhalese, Arab, and African traditions. Islam plays a central role in daily life. Traditional music includes Bodu Beru drumming, and the culture emphasizes hospitality, fishing traditions, and craftsmanship in boat building and mat weaving.",
        budget: { low: 100000, medium: 250000, high: 500000 },
        coordinates: { lat: 3.2028, lng: 73.2207 }
    },
    {
        id: "dubai",
        name: "Dubai",
        country: "United Arab Emirates",
        state: "Dubai",
        type: "Adventure",
        shortDescription: "Futuristic city with luxury and desert adventures",
        description: "Dubai is a city of superlatives - home to the world's tallest building, largest shopping mall, and most luxurious hotels. This futuristic metropolis in the UAE combines ultramodern architecture with traditional Arabian culture. From desert safaris to indoor skiing, Dubai offers unique experiences that blend luxury with adventure.",
        image: "/images/destination-img10.jpeg",
        bannerImage: "/images/img-1.jpg",
        bestTime: "November to March",
        attractions: [
            {
                name: "Burj Khalifa",
                type: "Monument",
                description: "World's tallest building with observation decks",
                image: "/images/attractions/burj-khalifa.jpg"
            },
            {
                name: "Dubai Mall",
                type: "Shopping",
                description: "Massive mall with aquarium and ice rink",
                image: "/images/attractions/dubai-mall.jpg"
            },
            {
                name: "Desert Safari",
                type: "Adventure",
                description: "Dune bashing and traditional Bedouin experience",
                image: "/images/attractions/desert-safari.jpg"
            },
            {
                name: "Palm Jumeirah",
                type: "Island",
                description: "Artificial palm-shaped island with resorts",
                image: "/images/attractions/palm-jumeirah.jpg"
            }
        ],
        food: ["Shawarma", "Hummus", "Al Harees", "Luqaimat", "Machboos"],
        culture: "Dubai's culture blends traditional Emirati heritage with modern cosmopolitan influences. While Islam shapes daily life, the city is remarkably diverse with expatriates from around the world. Traditional souks coexist with luxury malls, and camel racing shares space with Formula 1.",
        budget: { low: 60000, medium: 150000, high: 350000 },
        coordinates: { lat: 25.2048, lng: 55.2708 }
    },
    {
        id: "switzerland",
        name: "Switzerland",
        country: "Switzerland",
        state: "Various Cantons",
        type: "Hill Station",
        shortDescription: "Alpine wonderland with mountains and chocolate",
        description: "Switzerland is a mountainous Central European country known for its stunning Alpine scenery, pristine lakes, charming villages, and world-class skiing. Home to the Swiss Alps, luxury watches, fine chocolate, and efficient trains, Switzerland offers breathtaking natural beauty combined with precision and quality in everything.",
        image: "/images/destination-img11.jpeg",
        bannerImage: "/images/img-2.jpg",
        bestTime: "April to October (summer), December to March (skiing)",
        attractions: [
            {
                name: "Jungfraujoch",
                type: "Mountain",
                description: "Top of Europe with glacier views",
                image: "/images/attractions/jungfraujoch.jpg"
            },
            {
                name: "Lake Geneva",
                type: "Lake",
                description: "Scenic lake surrounded by Alps and vineyards",
                image: "/images/attractions/lake-geneva.jpg"
            },
            {
                name: "Matterhorn",
                type: "Mountain",
                description: "Iconic pyramid-shaped peak in Zermatt",
                image: "/images/attractions/matterhorn.jpg"
            },
            {
                name: "Interlaken",
                type: "Town",
                description: "Adventure capital between two lakes",
                image: "/images/attractions/interlaken.jpg"
            }
        ],
        food: ["Fondue", "Raclette", "Rösti", "Swiss Chocolate", "Zürcher Geschnetzeltes"],
        culture: "Swiss culture is characterized by multilingualism (German, French, Italian, Romansh), precision, punctuality, and a strong sense of tradition. Alpine traditions like yodeling and alphorn playing coexist with modern innovation. The country is known for its neutrality, direct democracy, and high quality of life.",
        budget: { low: 120000, medium: 300000, high: 600000 },
        coordinates: { lat: 46.8182, lng: 8.2275 }
    },
    {
        id: "newyork",
        name: "New York",
        country: "United States",
        state: "New York",
        type: "Adventure",
        shortDescription: "The city that never sleeps with iconic landmarks",
        description: "New York City, often called NYC or simply New York, is the most populous city in the United States. Known for its iconic skyline, diverse culture, world-class museums, Broadway shows, and vibrant neighborhoods, NYC is a global hub for finance, arts, fashion, and entertainment. From Times Square to Central Park, the city offers endless experiences.",
        image: "/images/destination-img12.jpeg",
        bannerImage: "/images/img-3.jpg",
        bestTime: "April to June, September to November",
        attractions: [
            {
                name: "Statue of Liberty",
                type: "Monument",
                description: "Iconic symbol of freedom and democracy",
                image: "/images/attractions/statue-liberty.jpg"
            },
            {
                name: "Central Park",
                type: "Park",
                description: "Massive urban park in Manhattan",
                image: "/images/attractions/central-park.jpg"
            },
            {
                name: "Times Square",
                type: "Landmark",
                description: "Bright lights and Broadway theaters",
                image: "/images/attractions/times-square.jpg"
            },
            {
                name: "Empire State Building",
                type: "Monument",
                description: "Art Deco skyscraper with observation decks",
                image: "/images/attractions/empire-state.jpg"
            }
        ],
        food: ["New York Pizza", "Bagels", "Hot Dogs", "Cheesecake", "Pastrami Sandwich"],
        culture: "New York's culture is incredibly diverse, reflecting its status as a melting pot of nationalities. The city is a global center for arts, with world-renowned museums, galleries, and theaters. From jazz clubs in Harlem to street art in Brooklyn, NYC's cultural scene is unmatched in its variety and vibrancy.",
        budget: { low: 100000, medium: 250000, high: 500000 },
        coordinates: { lat: 40.7128, lng: -74.0060 }
    }
];

export default destinationsData;
