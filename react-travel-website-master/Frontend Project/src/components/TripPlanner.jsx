import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import destinationsData from '../data/destinations-data';
import { getTripPlan } from '../data/trip-plans-data';
import './TripPlanner.scss';

function TripPlanner() {
    const { t } = useLanguage();
    const [selectedDestination, setSelectedDestination] = useState('');
    const [numberOfDays, setNumberOfDays] = useState(3);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [generatedPlan, setGeneratedPlan] = useState(null);
    const [showPlan, setShowPlan] = useState(false);

    const interests = ['Adventure', 'Relaxation', 'Food', 'Culture'];

    const handleInterestToggle = (interest) => {
        setSelectedInterests(prev => {
            if (prev.includes(interest)) {
                return prev.filter(i => i !== interest);
            } else {
                return [...prev, interest];
            }
        });
    };

    const handleGeneratePlan = () => {
        if (!selectedDestination || selectedInterests.length === 0) {
            alert('Please select a destination and at least one interest!');
            return;
        }

        const plan = getTripPlan(selectedDestination, numberOfDays, selectedInterests);
        const destination = destinationsData.find(d => d.id === selectedDestination);

        setGeneratedPlan({
            destination: destination,
            days: numberOfDays,
            interests: selectedInterests,
            itinerary: plan || []
        });
        setShowPlan(true);
    };

    const handlePrint = () => {
        window.print();
    };

    const calculateBudget = () => {
        if (!generatedPlan) return null;

        const destination = generatedPlan.destination;
        const days = generatedPlan.days;
        const interests = generatedPlan.interests;

        // Calculate based on destination budget and interests
        let multiplier = 1;
        if (interests.includes('Adventure')) multiplier += 0.3;
        if (interests.includes('Relaxation')) multiplier += 0.2;
        if (interests.includes('Food')) multiplier += 0.15;
        if (interests.includes('Culture')) multiplier += 0.1;

        const perDayBudget = {
            low: Math.round((destination.budget.low / 3) * multiplier),
            medium: Math.round((destination.budget.medium / 3) * multiplier),
            high: Math.round((destination.budget.high / 3) * multiplier)
        };

        return {
            low: perDayBudget.low * days,
            medium: perDayBudget.medium * days,
            high: perDayBudget.high * days
        };
    };

    const budget = calculateBudget();

    return (
        <div className="trip-planner-container">
            <div className="trip-planner-header">
                <h1 className="planner-title">🗺️ {t('tripPlanner')}</h1>
                <p className="planner-subtitle">Plan your perfect trip with personalized day-wise itineraries</p>
            </div>

            <div className="trip-planner-content">
                <div className="planner-form">
                    <div className="form-section">
                        <label className="form-label">
                            <i className="fas fa-map-marker-alt"></i> {t('selectDestination')}
                        </label>
                        <select
                            className="form-select"
                            value={selectedDestination}
                            onChange={(e) => setSelectedDestination(e.target.value)}
                        >
                            <option value="">Choose a destination...</option>
                            {destinationsData.map(dest => (
                                <option key={dest.id} value={dest.id}>{dest.name}, {dest.country}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-section">
                        <label className="form-label">
                            <i className="fas fa-calendar-alt"></i> {t('numberOfDays')}
                        </label>
                        <div className="days-selector">
                            <button
                                className="days-btn"
                                onClick={() => setNumberOfDays(Math.max(1, numberOfDays - 1))}
                                disabled={numberOfDays <= 1}
                            >
                                <i className="fas fa-minus"></i>
                            </button>
                            <span className="days-display">{numberOfDays} {numberOfDays === 1 ? 'Day' : 'Days'}</span>
                            <button
                                className="days-btn"
                                onClick={() => setNumberOfDays(Math.min(14, numberOfDays + 1))}
                                disabled={numberOfDays >= 14}
                            >
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-section">
                        <label className="form-label">
                            <i className="fas fa-heart"></i> {t('selectInterests')}
                        </label>
                        <div className="interests-grid">
                            {interests.map(interest => (
                                <button
                                    key={interest}
                                    className={`interest-btn ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                                    onClick={() => handleInterestToggle(interest)}
                                >
                                    <span className="interest-icon">
                                        {interest === 'Adventure' && '🏄'}
                                        {interest === 'Relaxation' && '🧘'}
                                        {interest === 'Food' && '🍜'}
                                        {interest === 'Culture' && '🏛️'}
                                    </span>
                                    <span className="interest-text">{t(interest.toLowerCase())}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="generate-btn" onClick={handleGeneratePlan}>
                        <i className="fas fa-magic"></i> {t('generatePlan')}
                    </button>
                </div>

                {showPlan && generatedPlan && (
                    <div className="generated-plan">
                        <div className="plan-header">
                            <div className="plan-title-section">
                                <h2 className="plan-title">Your {generatedPlan.days}-Day Trip to {generatedPlan.destination.name}</h2>
                                <p className="plan-subtitle">
                                    Interests: {generatedPlan.interests.join(', ')}
                                </p>
                            </div>
                            <button className="print-btn" onClick={handlePrint}>
                                <i className="fas fa-print"></i> Print Plan
                            </button>
                        </div>

                        {budget && (
                            <div className="budget-section">
                                <h3 className="budget-title">💰 Estimated Budget</h3>
                                <div className="budget-options">
                                    <div className="budget-option">
                                        <span className="budget-label">Budget</span>
                                        <span className="budget-amount">₹{budget.low.toLocaleString()}</span>
                                    </div>
                                    <div className="budget-option recommended">
                                        <span className="budget-label">Recommended</span>
                                        <span className="budget-amount">₹{budget.medium.toLocaleString()}</span>
                                    </div>
                                    <div className="budget-option">
                                        <span className="budget-label">Luxury</span>
                                        <span className="budget-amount">₹{budget.high.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="itinerary-timeline">
                            {generatedPlan.itinerary.length > 0 ? (
                                generatedPlan.itinerary.map((day, index) => (
                                    <div key={index} className="day-card">
                                        <div className="day-number">Day {day.day}</div>
                                        <div className="day-content">
                                            <h3 className="day-title">{day.title}</h3>
                                            <div className="day-activities">
                                                <div className="activity">
                                                    <span className="activity-time">🌅 Morning</span>
                                                    <p className="activity-description">{day.morning}</p>
                                                </div>
                                                <div className="activity">
                                                    <span className="activity-time">☀️ Afternoon</span>
                                                    <p className="activity-description">{day.afternoon}</p>
                                                </div>
                                                <div className="activity">
                                                    <span className="activity-time">🌆 Evening</span>
                                                    <p className="activity-description">{day.evening}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-plan-message">
                                    <p>No specific itinerary available for this combination. Please try different interests or destination!</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TripPlanner;
