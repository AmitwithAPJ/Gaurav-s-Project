import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useLanguage } from '../context/LanguageContext';
import './DestinationCard.scss';

function DestinationCard({ destination }) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const { t } = useLanguage();
    const isLiked = isFavorite(destination.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(destination.id);
    };

    return (
        <Link to={`/destinations/${destination.id}`} className="destination-card-link">
            <div className="destination-card">
                <div className="destination-card-image">
                    <img src={destination.image} alt={destination.name} />
                    <div className="destination-card-overlay">
                        <button
                            className={`favorite-btn ${isLiked ? 'liked' : ''}`}
                            onClick={handleFavoriteClick}
                            aria-label={isLiked ? t('removeFromFavorites') : t('addToFavorites')}
                        >
                            <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
                        </button>
                        <div className="destination-type-badge">{destination.type}</div>
                    </div>
                </div>
                <div className="destination-card-content">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-location">
                        <i className="fas fa-map-marker-alt"></i> {destination.state}, {destination.country}
                    </p>
                    <p className="destination-description">{destination.shortDescription}</p>
                    <div className="destination-card-footer">
                        <span className="view-details">{t('viewDetails')} →</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default DestinationCard;
