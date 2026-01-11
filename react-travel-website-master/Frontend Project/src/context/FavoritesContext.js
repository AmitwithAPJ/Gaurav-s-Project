import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Get favorites from localStorage or default to empty array
        const savedFavorites = localStorage.getItem('wanderly-favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        // Update localStorage when favorites change
        localStorage.setItem('wanderly-favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (destinationId) => {
        setFavorites(prev => {
            if (!prev.includes(destinationId)) {
                return [...prev, destinationId];
            }
            return prev;
        });
    };

    const removeFavorite = (destinationId) => {
        setFavorites(prev => prev.filter(id => id !== destinationId));
    };

    const toggleFavorite = (destinationId) => {
        if (favorites.includes(destinationId)) {
            removeFavorite(destinationId);
        } else {
            addFavorite(destinationId);
        }
    };

    const isFavorite = (destinationId) => {
        return favorites.includes(destinationId);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            toggleFavorite,
            isFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export default FavoritesContext;
