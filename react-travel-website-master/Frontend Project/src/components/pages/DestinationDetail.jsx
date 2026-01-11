import React from 'react';
import { useParams, Link } from 'react-router-dom';
import destinationsData from '../../data/destinations-data';
import { useFavorites } from '../../context/FavoritesContext';
import { useLanguage } from '../../context/LanguageContext';
import './DestinationDetail.scss';

function DestinationDetail() {
    const { id } = useParams();
    const { isFavorite, toggleFavorite } = useFavorites();
    const { t } = useLanguage();

    const destination = destinationsData.find(d => d.id === id);

    if (!destination) {
        return (
            <div className="destination-not-found">
                <h1>Destination not found</h1>
                <Link to="/destinations">Back to Destinations</Link>
            </div>
        );
    }

    const isLiked = isFavorite(destination.id);

    return (
        <div className="destination-detail-page">
            <div className="destination-banner" style={{ backgroundImage: `url(${destination.bannerImage})` }}>
                <div className="banner-overlay">
                    <div className="banner-content">
                        <h1 className="destination-title">{destination.name}</h1>
                        <p className="destination-location">
                            <i className="fas fa-map-marker-alt"></i> {destination.state}, {destination.country}
                        </p>
                        <div className="banner-actions">
                            <button
                                className={`favorite-btn-large ${isLiked ? 'liked' : ''}`}
                                onClick={() => toggleFavorite(destination.id)}
                            >
                                <i className={`${isLiked ? 'fas' : 'far'} fa-heart`}></i>
                                {isLiked ? 'Saved' : 'Save'}
                            </button>
                            <Link to="/trip-planner" className="plan-trip-btn">
                                <i className="fas fa-route"></i> {t('planTrip')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="destination-content">
                <div className="content-section">
                    <h2 className="section-heading">
                        <i className="fas fa-info-circle"></i> {t('about')} {destination.name}
                    </h2>
                    <p className="destination-full-description">{destination.description}</p>
                </div>

                <div className="content-section">
                    <h2 className="section-heading">
                        <i className="fas fa-calendar-check"></i> {t('bestTimeToVisit')}
                    </h2>
                    <div className="best-time-card">
                        <i className="fas fa-sun"></i>
                        <p>{destination.bestTime}</p>
                    </div>
                </div>

                <div className="content-section">
                    <h2 className="section-heading">
                        <i className="fas fa-map-marked-alt"></i> {t('attractions')}
                    </h2>
                    <div className="attractions-grid">
                        {destination.attractions.map((attraction, index) => (
                            <div key={index} className="attraction-card">
                                <div className="attraction-image">
                                    <img
                                        src={attraction.image}
                                        alt={attraction.name}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(attraction.name);
                                        }}
                                    />
                                    <span className="attraction-type">{attraction.type}</span>
                                </div>
                                <div className="attraction-info">
                                    <h3>{attraction.name}</h3>
                                    <p>{attraction.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2 className="section-heading">
                        <i className="fas fa-utensils"></i> {t('localFood')}
                    </h2>
                    <div className="food-tags">
                        {destination.food.map((food, index) => (
                            <span key={index} className="food-tag">
                                <i className="fas fa-check"></i> {food}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="content-section">
                    <h2 className="section-heading">
                        <i className="fas fa-landmark"></i> {t('cultureHistory')}
                    </h2>
                    <p className="culture-description">{destination.culture}</p>
                </div>

                <div className="content-section budget-section">
                    <h2 className="section-heading">
                        <i className="fas fa-wallet"></i> {t('budget')} Estimate (3 Days)
                    </h2>
                    <div className="budget-cards">
                        <div className="budget-card">
                            <span className="budget-level">Budget</span>
                            <span className="budget-price">₹{destination.budget.low.toLocaleString()}</span>
                        </div>
                        <div className="budget-card recommended">
                            <span className="budget-level">Recommended</span>
                            <span className="budget-price">₹{destination.budget.medium.toLocaleString()}</span>
                            <span className="recommended-badge">Best Value</span>
                        </div>
                        <div className="budget-card">
                            <span className="budget-level">Luxury</span>
                            <span className="budget-price">₹{destination.budget.high.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className="cta-section">
                    <h2>Ready to explore {destination.name}?</h2>
                    <Link to="/trip-planner" className="cta-button">
                        <i className="fas fa-magic"></i> Create Your Itinerary
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DestinationDetail;
