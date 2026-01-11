import React from 'react';
import { Link } from 'react-router-dom';
import experiencesData from '../data/experiences-data';
import { useLanguage } from '../context/LanguageContext';
import './FeaturedExperiences.scss';

function FeaturedExperiences() {
    const { t } = useLanguage();

    return (
        <div className="featured-experiences-container">
            <div className="experiences-header">
                <h2 className="section-title">✨ Featured Experiences</h2>
                <p className="section-subtitle">Discover unique ways to explore the world</p>
            </div>

            <div className="experiences-grid">
                {experiencesData.map(experience => (
                    <div key={experience.id} className="experience-card">
                        <div className="experience-icon">{experience.icon}</div>
                        <h3 className="experience-title">{t(experience.title.toLowerCase().replace(' ', ''))}</h3>
                        <p className="experience-description">{experience.description}</p>
                        <div className="experience-destinations">
                            <span className="destinations-label">Popular in:</span>
                            <div className="destination-tags">
                                {experience.destinations.slice(0, 3).map((dest, idx) => (
                                    <span key={idx} className="destination-tag">{dest}</span>
                                ))}
                            </div>
                        </div>
                        <div className="experience-overlay">
                            <p className="experience-long-desc">{experience.longDescription}</p>
                            <ul className="experience-activities">
                                {experience.activities.slice(0, 3).map((activity, idx) => (
                                    <li key={idx}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedExperiences;
