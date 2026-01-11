import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './SearchFilter.scss';

function SearchFilter({ onSearchChange, onCategoryChange, selectedCategory }) {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['All', 'Beach', 'Hill Station', 'Heritage', 'Adventure', 'Nature'];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchChange(value);
    };

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        onSearchChange('');
        onCategoryChange('All');
    };

    return (
        <div className="search-filter-container">
            <div className="search-filter-content">
                <div className="search-box">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search destinations, cities, countries..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button className="clear-search" onClick={() => handleSearchChange({ target: { value: '' } })}>
                            <i className="fas fa-times"></i>
                        </button>
                    )}
                </div>

                <div className="category-filters">
                    <span className="filter-label">Filter by:</span>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                    {(searchTerm || selectedCategory !== 'All') && (
                        <button className="clear-filters-btn" onClick={handleClearFilters}>
                            <i className="fas fa-redo"></i> Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;
