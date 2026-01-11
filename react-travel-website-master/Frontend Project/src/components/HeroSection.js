import React from "react";
import { Button } from "./Button";
import './HeroSection.scss';
import { useLanguage } from '../context/LanguageContext';

import Video2 from '../videos/video-2.mp4';

function HeroSection() {
  const { t } = useLanguage();

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations-section');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlanner = () => {
    window.location.href = '/trip-planner';
  };

  return (
    <div className="hero-container">
      <video src={Video2} autoPlay loop muted />
      <div className="video-overlay">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={scrollToDestinations}
          >{t('exploreDestinations')}</Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={scrollToPlanner}
          >{t('startPlanning')}</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

