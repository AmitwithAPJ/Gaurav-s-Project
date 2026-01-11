import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useFavorites } from '../context/FavoritesContext';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { isDarkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const { favorites } = useFavorites();

    const handleHamburgerClick = () => {
        return setClick(!click);
    }
    const closeMobileMenu = () => {
        return setClick(false);
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <span className="logo-text">Wanderly</span>
                    </Link>
                    <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleHamburgerClick}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                {t('home')}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/destinations" className="nav-links" onClick={closeMobileMenu}>
                                {t('destinations')}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/trip-planner" className="nav-links" onClick={closeMobileMenu}>
                                {t('tripPlanner')}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/favorites" className="nav-links" onClick={closeMobileMenu}>
                                {t('favorites')} {favorites.length > 0 && <span className="favorites-badge">{favorites.length}</span>}
                            </Link>
                        </li>
                        <li className='nav-item nav-controls'>
                            <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
                                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                            </button>
                            <button className="language-toggle" onClick={toggleLanguage} title="Toggle Language">
                                {language === 'en' ? 'हि' : 'EN'}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar


