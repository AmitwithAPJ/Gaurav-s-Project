import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import destinationsData from '../data/destinations-data';
import { useLanguage } from '../context/LanguageContext';
import './DestinationList.scss';

function DestinationList({ searchQuery = '', selectedCategory = 'All' }) {
    const { t } = useLanguage();

    // Filter destinations based on search and category
    const filteredDestinations = destinationsData.filter(destination => {
        const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            destination.state.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === 'All' || destination.type === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="destination-list-container" id="destinations-section">
            <div className="destination-list-header">
                <h2 className="section-title">{t('destinations')}</h2>
                <p className="section-subtitle">Discover amazing places around the world</p>
            </div>

            {filteredDestinations.length === 0 ? (
                <div className="no-results">
                    <i className="fas fa-search"></i>
                    <p>No destinations found matching your criteria</p>
                </div>
            ) : (
                <>
                    <div className="results-count">
                        {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
                    </div>
                    <div className="destination-grid">
                        {filteredDestinations.map(destination => (
                            <DestinationCard key={destination.id} destination={destination} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default DestinationList;
