import React, { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials-data';
import './Testimonials.scss';

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <i
                key={index}
                className={`${index < rating ? 'fas' : 'far'} fa-star`}
            ></i>
        ));
    };

    return (
        <div className="testimonials-container">
            <div className="testimonials-header">
                <h2 className="section-title">💬 What Travelers Say</h2>
                <p className="section-subtitle">Real experiences from real travelers</p>
            </div>

            <div className="testimonials-carousel">
                <div className="testimonial-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <div className="testimonial-rating">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        <img src={testimonial.avatar} alt={testimonial.name} onError={(e) => {
                                            e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=667eea&color=fff&size=80';
                                        }} />
                                    </div>
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <p className="author-location">
                                            <i className="fas fa-map-marker-alt"></i> {testimonial.location}
                                        </p>
                                        <p className="author-destination">Visited: {testimonial.destination}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonials-dots">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
