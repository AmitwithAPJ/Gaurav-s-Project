import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import { useLanguage } from '../../context/LanguageContext';
import destinationsData from '../../data/destinations-data';
import DestinationCard from '../DestinationCard';
import './Favorites.scss';

function Favorites() {
    const { favorites } = useFavorites();
    const { t } = useLanguage();

    const favoriteDestinations = destinationsData.filter(dest =>
        favorites.includes(dest.id)
    );

    return (
        <div className="favorites-page">
            <div className="favorites-header">
                <h1 className="page-title">
                    <i className="fas fa-heart"></i> {t('favorites')}
                </h1>
                <p className="page-subtitle">
                    {favoriteDestinations.length > 0
                        ? `You have ${favoriteDestinations.length} saved ${favoriteDestinations.length === 1 ? 'destination' : 'destinations'}`
                        : 'Start saving your favorite destinations'
                    }
                </p>
            </div>

            <div className="favorites-content">
                {favoriteDestinations.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">
                            <i className="far fa-heart"></i>
                        </div>
                        <h2>No favorites yet</h2>
                        <p>Explore destinations and save your favorites to plan your next trip!</p>
                        <Link to="/destinations" className="explore-btn">
                            <i className="fas fa-compass"></i> Explore Destinations
                        </Link>
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favoriteDestinations.map(destination => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favorites;
