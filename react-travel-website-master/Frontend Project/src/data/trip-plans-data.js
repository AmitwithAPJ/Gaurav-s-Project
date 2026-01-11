const tripPlansData = {
    goa: {
        adventure: {
            3: [
                { day: 1, title: "Beach Adventures", morning: "Baga Beach - Water sports (Parasailing, Jet Skiing)", afternoon: "Calangute Beach - Banana boat rides", evening: "Beach shacks and sunset" },
                { day: 2, title: "Nature & Thrills", morning: "Dudhsagar Falls trek", afternoon: "Spice plantation tour", evening: "Night market at Arpora" },
                { day: 3, title: "Island Exploration", morning: "Scuba diving at Grande Island", afternoon: "Snorkeling and beach relaxation", evening: "Cruise on Mandovi River" }
            ],
            5: [
                { day: 1, title: "North Goa Beaches", morning: "Baga Beach - Water sports", afternoon: "Anjuna Beach exploration", evening: "Sunset at Vagator Beach" },
                { day: 2, title: "Adventure Day", morning: "Parasailing at Calangute", afternoon: "Jet skiing and banana boat", evening: "Beach party at Tito's Lane" },
                { day: 3, title: "Waterfall Trek", morning: "Dudhsagar Falls trek", afternoon: "Swimming at falls", evening: "Spice plantation visit" },
                { day: 4, title: "Water Adventures", morning: "Scuba diving at Grande Island", afternoon: "Snorkeling session", evening: "Dolphin watching cruise" },
                { day: 5, title: "South Goa Chill", morning: "Palolem Beach kayaking", afternoon: "Butterfly Beach boat trip", evening: "Farewell dinner at beach shack" }
            ],
            7: [
                { day: 1, title: "Arrival & Beach", morning: "Check-in and relax", afternoon: "Baga Beach exploration", evening: "Sunset at Candolim" },
                { day: 2, title: "Water Sports Extravaganza", morning: "Parasailing and jet skiing", afternoon: "Banana boat and bumper rides", evening: "Beach shack hopping" },
                { day: 3, title: "Dudhsagar Adventure", morning: "Early trek to Dudhsagar Falls", afternoon: "Swimming and photography", evening: "Spice plantation dinner" },
                { day: 4, title: "Island Diving", morning: "Scuba diving at Grande Island", afternoon: "Snorkeling and beach time", evening: "Sunset cruise on Mandovi" },
                { day: 5, title: "Fort & Heritage", morning: "Fort Aguada exploration", afternoon: "Chapora Fort visit", evening: "Anjuna flea market" },
                { day: 6, title: "South Goa Serenity", morning: "Palolem Beach activities", afternoon: "Cabo de Rama Fort", evening: "Beach bonfire" },
                { day: 7, title: "Relaxation & Departure", morning: "Spa and massage", afternoon: "Last-minute shopping", evening: "Departure" }
            ]
        },
        relaxation: {
            3: [
                { day: 1, title: "Beach Bliss", morning: "Palolem Beach relaxation", afternoon: "Beachside massage", evening: "Sunset yoga" },
                { day: 2, title: "Spa & Wellness", morning: "Ayurvedic spa treatment", afternoon: "Pool time at resort", evening: "Candlelight dinner" },
                { day: 3, title: "Peaceful Exploration", morning: "Butterfly Beach boat trip", afternoon: "Agonda Beach serenity", evening: "Beach meditation" }
            ],
            5: [
                { day: 1, title: "Arrival & Unwind", morning: "Check-in and beach walk", afternoon: "Resort pool relaxation", evening: "Sunset at Palolem" },
                { day: 2, title: "Spa Day", morning: "Full body Ayurvedic massage", afternoon: "Facial and wellness treatment", evening: "Yoga session" },
                { day: 3, title: "Beach Hopping", morning: "Agonda Beach tranquility", afternoon: "Butterfly Beach by boat", evening: "Beachside dinner" },
                { day: 4, title: "Cultural Relaxation", morning: "Basilica of Bom Jesus visit", afternoon: "Old Goa churches tour", evening: "River cruise" },
                { day: 5, title: "Final Chill", morning: "Beach yoga", afternoon: "Last swim and sunbathing", evening: "Farewell dinner" }
            ],
            7: [
                { day: 1, title: "Settle In", morning: "Arrival and check-in", afternoon: "Beach walk at Palolem", evening: "Sunset meditation" },
                { day: 2, title: "Wellness Retreat", morning: "Yoga and pranayama", afternoon: "Ayurvedic consultation", evening: "Herbal tea and relaxation" },
                { day: 3, title: "Spa Indulgence", morning: "Full body massage", afternoon: "Facial and body scrub", evening: "Pool relaxation" },
                { day: 4, title: "Quiet Beaches", morning: "Agonda Beach solitude", afternoon: "Reading and sunbathing", evening: "Beach dinner" },
                { day: 5, title: "Cultural Peace", morning: "Basilica visit", afternoon: "Old Goa exploration", evening: "Sunset cruise" },
                { day: 6, title: "Nature Connection", morning: "Butterfly Beach boat trip", afternoon: "Cabo de Rama Fort views", evening: "Beach bonfire" },
                { day: 7, title: "Departure Day", morning: "Final yoga session", afternoon: "Packing and checkout", evening: "Departure" }
            ]
        },
        food: {
            3: [
                { day: 1, title: "Coastal Cuisine", morning: "Breakfast at beach shack", afternoon: "Seafood lunch at Panjim", evening: "Goan thali dinner" },
                { day: 2, title: "Local Flavors", morning: "Fish curry rice breakfast", afternoon: "Vindaloo and xacuti lunch", evening: "Bebinca dessert tasting" },
                { day: 3, title: "Food Trail", morning: "Market visit and street food", afternoon: "Cooking class", evening: "Farewell feast" }
            ],
            5: [
                { day: 1, title: "Arrival Feast", morning: "Traditional Goan breakfast", afternoon: "Beach shack seafood", evening: "Panjim restaurant hopping" },
                { day: 2, title: "Coastal Delights", morning: "Fish curry rice", afternoon: "Prawn balchão lunch", evening: "Crab xec xec dinner" },
                { day: 3, title: "Street Food Adventure", morning: "Panjim market tour", afternoon: "Street food sampling", evening: "Local tavern experience" },
                { day: 4, title: "Cooking Experience", morning: "Spice plantation visit", afternoon: "Goan cooking class", evening: "Enjoy your creations" },
                { day: 5, title: "Sweet Endings", morning: "Bebinca and dodol tasting", afternoon: "Coconut sweets tour", evening: "Farewell dinner at beach" }
            ],
            7: [
                { day: 1, title: "Welcome to Goan Cuisine", morning: "Poee bread and chai", afternoon: "Fish thali lunch", evening: "Beachside seafood" },
                { day: 2, title: "Seafood Extravaganza", morning: "Prawn breakfast", afternoon: "Crab curry lunch", evening: "Lobster dinner" },
                { day: 3, title: "Traditional Goan", morning: "Sanna and sorpotel", afternoon: "Vindaloo and xacuti", evening: "Cafreal and recheado" },
                { day: 4, title: "Market & Street Food", morning: "Mapusa market tour", afternoon: "Street food trail", evening: "Local feni tasting" },
                { day: 5, title: "Cooking Class Day", morning: "Spice plantation", afternoon: "Hands-on cooking", evening: "Feast on your dishes" },
                { day: 6, title: "Portuguese Influence", morning: "Bebinca making", afternoon: "Portuguese-Goan fusion", evening: "Fine dining experience" },
                { day: 7, title: "Final Food Journey", morning: "Breakfast buffet", afternoon: "Last-minute food shopping", evening: "Departure" }
            ]
        },
        culture: {
            3: [
                { day: 1, title: "Heritage Trail", morning: "Basilica of Bom Jesus", afternoon: "Se Cathedral and churches", evening: "Fontainhas Latin Quarter walk" },
                { day: 2, title: "Forts & History", morning: "Fort Aguada exploration", afternoon: "Chapora Fort", evening: "Museum of Christian Art" },
                { day: 3, title: "Local Life", morning: "Panjim market visit", afternoon: "Traditional village tour", evening: "Cultural show" }
            ],
            5: [
                { day: 1, title: "Old Goa Churches", morning: "Basilica of Bom Jesus", afternoon: "Se Cathedral", evening: "Church of St. Francis of Assisi" },
                { day: 2, title: "Colonial Heritage", morning: "Fontainhas heritage walk", afternoon: "Goa State Museum", evening: "Reis Magos Fort" },
                { day: 3, title: "Portuguese Legacy", morning: "Cabo Palace", afternoon: "Museum of Christian Art", evening: "Latin Quarter dinner" },
                { day: 4, title: "Forts & Views", morning: "Fort Aguada", afternoon: "Chapora Fort", evening: "Sunset at Vagator" },
                { day: 5, title: "Village Culture", morning: "Traditional Goan village", afternoon: "Ancestral Goa museum", evening: "Folk dance performance" }
            ],
            7: [
                { day: 1, title: "UNESCO Heritage", morning: "Basilica of Bom Jesus", afternoon: "Se Cathedral complex", evening: "Old Goa exploration" },
                { day: 2, title: "Church Trail", morning: "Church of St. Cajetan", afternoon: "Church of St. Francis", evening: "Chapel of St. Catherine" },
                { day: 3, title: "Colonial Panjim", morning: "Fontainhas walking tour", afternoon: "Goa State Museum", evening: "Menezes Braganza House" },
                { day: 4, title: "Fort Circuit", morning: "Fort Aguada", afternoon: "Reis Magos Fort", evening: "Cabo de Rama Fort" },
                { day: 5, title: "Art & Culture", morning: "Museum of Christian Art", afternoon: "Goa Chitra Museum", evening: "Art galleries in Panjim" },
                { day: 6, title: "Village Immersion", morning: "Traditional village visit", afternoon: "Ancestral Goa", evening: "Cultural performance" },
                { day: 7, title: "Final Exploration", morning: "Spice plantation culture", afternoon: "Local market shopping", evening: "Departure" }
            ]
        }
    },
    // Add similar structures for other destinations
    jaipur: {
        adventure: {
            3: [
                { day: 1, title: "Fort Exploration", morning: "Amber Fort elephant ride", afternoon: "Jaigarh Fort trek", evening: "Nahargarh Fort sunset" },
                { day: 2, title: "City Adventures", morning: "Hot air balloon ride", afternoon: "Zip-lining at Neemrana", evening: "Chokhi Dhani village experience" },
                { day: 3, title: "Wildlife & Nature", morning: "Jhalana Leopard Safari", afternoon: "Jal Mahal boat ride", evening: "Departure" }
            ]
        },
        culture: {
            3: [
                { day: 1, title: "Royal Heritage", morning: "City Palace complex", afternoon: "Jantar Mantar observatory", evening: "Hawa Mahal light show" },
                { day: 2, title: "Forts & Palaces", morning: "Amber Fort", afternoon: "Jaigarh Fort", evening: "Nahargarh Fort sunset" },
                { day: 3, title: "Markets & Crafts", morning: "Johari Bazaar shopping", afternoon: "Block printing workshop", evening: "Puppet show" }
            ]
        }
    },
    manali: {
        adventure: {
            5: [
                { day: 1, title: "Arrival & Acclimatization", morning: "Check-in and rest", afternoon: "Mall Road exploration", evening: "Manu Temple visit" },
                { day: 2, title: "Solang Valley Thrills", morning: "Paragliding", afternoon: "Zorbing and skiing", evening: "Ropeway ride" },
                { day: 3, title: "Rohtang Pass", morning: "Early drive to Rohtang", afternoon: "Snow activities", evening: "Return and rest" },
                { day: 4, title: "River Rafting", morning: "Beas River rafting", afternoon: "Trekking to Jogini Falls", evening: "Vashisht hot springs" },
                { day: 5, title: "Departure", morning: "Old Manali walk", afternoon: "Shopping", evening: "Departure" }
            ]
        }
    }
};

// Helper function to get trip plan
export const getTripPlan = (destinationId, days, interests) => {
    const destination = tripPlansData[destinationId];
    if (!destination) return null;

    // Combine plans based on interests
    const plans = [];
    interests.forEach(interest => {
        const interestPlans = destination[interest.toLowerCase()];
        if (interestPlans) {
            // Find closest day count
            const availableDays = Object.keys(interestPlans).map(Number).sort((a, b) => a - b);
            const closestDays = availableDays.reduce((prev, curr) =>
                Math.abs(curr - days) < Math.abs(prev - days) ? curr : prev
            );
            if (interestPlans[closestDays]) {
                plans.push(...interestPlans[closestDays]);
            }
        }
    });

    // If no specific plans, return a generic one
    if (plans.length === 0 && destination.adventure) {
        const days3 = destination.adventure[3] || destination.adventure[5] || destination.adventure[7];
        return days3 || [];
    }

    // Remove duplicates and limit to requested days
    const uniquePlans = plans.filter((plan, index, self) =>
        index === self.findIndex(p => p.day === plan.day)
    ).slice(0, days);

    return uniquePlans;
};

export default tripPlansData;
