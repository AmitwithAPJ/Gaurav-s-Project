import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import SearchFilter from '../SearchFilter';
import DestinationList from '../DestinationList';
import FeaturedExperiences from '../FeaturedExperiences';
import Testimonials from '../Testimonials';
import './Home.scss';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <>
            <HeroSection />
            <SearchFilter
                onSearchChange={setSearchQuery}
                onCategoryChange={setSelectedCategory}
                selectedCategory={selectedCategory}
            />
            <DestinationList
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
            />
            <FeaturedExperiences />
            <Testimonials />
        </>
    );
}

export default Home;
