import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

// Translation data
const translations = {
    en: {
        // Navigation
        home: 'Home',
        destinations: 'Destinations',
        tripPlanner: 'Trip Planner',
        favorites: 'Favorites',
        services: 'Services',

        // Hero Section
        heroTitle: 'Explore the world, one place at a time',
        heroSubtitle: 'Discover destinations, plan trips, and travel smarter',
        exploreDestinations: 'Explore Destinations',
        startPlanning: 'Start Planning',

        // Common
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        planTrip: 'Plan Trip',
        addToFavorites: 'Add to Favorites',
        removeFromFavorites: 'Remove from Favorites',

        // Destination Details
        about: 'About',
        bestTimeToVisit: 'Best Time to Visit',
        attractions: 'Attractions',
        localFood: 'Local Food',
        cultureHistory: 'Culture & History',
        budget: 'Budget',

        // Trip Planner
        selectDestination: 'Select Destination',
        numberOfDays: 'Number of Days',
        selectInterests: 'Select Your Interests',
        adventure: 'Adventure',
        relaxation: 'Relaxation',
        food: 'Food',
        culture: 'Culture',
        generatePlan: 'Generate Plan',

        // Experiences
        adventureSports: 'Adventure Sports',
        heritageWalks: 'Heritage Walks',
        foodTrails: 'Food Trails',
        natureEscapes: 'Nature Escapes',

        // Footer
        aboutUs: 'About Us',
        contact: 'Contact',
        followUs: 'Follow Us'
    },
    hi: {
        // Navigation
        home: 'होम',
        destinations: 'गंतव्य',
        tripPlanner: 'यात्रा योजनाकार',
        favorites: 'पसंदीदा',
        services: 'सेवाएं',

        // Hero Section
        heroTitle: 'दुनिया का अन्वेषण करें, एक बार में एक जगह',
        heroSubtitle: 'गंतव्यों की खोज करें, यात्राओं की योजना बनाएं और स्मार्ट यात्रा करें',
        exploreDestinations: 'गंतव्य देखें',
        startPlanning: 'योजना शुरू करें',

        // Common
        learnMore: 'और जानें',
        viewDetails: 'विवरण देखें',
        planTrip: 'यात्रा की योजना बनाएं',
        addToFavorites: 'पसंदीदा में जोड़ें',
        removeFromFavorites: 'पसंदीदा से हटाएं',

        // Destination Details
        about: 'के बारे में',
        bestTimeToVisit: 'यात्रा का सबसे अच्छा समय',
        attractions: 'आकर्षण',
        localFood: 'स्थानीय भोजन',
        cultureHistory: 'संस्कृति और इतिहास',
        budget: 'बजट',

        // Trip Planner
        selectDestination: 'गंतव्य चुनें',
        numberOfDays: 'दिनों की संख्या',
        selectInterests: 'अपनी रुचियां चुनें',
        adventure: 'साहसिक',
        relaxation: 'आराम',
        food: 'भोजन',
        culture: 'संस्कृति',
        generatePlan: 'योजना बनाएं',

        // Experiences
        adventureSports: 'साहसिक खेल',
        heritageWalks: 'विरासत यात्रा',
        foodTrails: 'भोजन यात्रा',
        natureEscapes: 'प्रकृति भ्रमण',

        // Footer
        aboutUs: 'हमारे बारे में',
        contact: 'संपर्क करें',
        followUs: 'हमें फॉलो करें'
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get language from localStorage or default to 'en'
        const savedLanguage = localStorage.getItem('wanderly-language');
        return savedLanguage || 'en';
    });

    useEffect(() => {
        // Update localStorage when language changes
        localStorage.setItem('wanderly-language', language);

        // Update document lang attribute
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'hi' : 'en');
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
