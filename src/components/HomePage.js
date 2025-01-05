import React from 'react';
import { Link } from 'react-router-dom';
import { topTouristSpots } from './touristSpotsData';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1 className="header-title">Visit Penang</h1>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/malls">Malls</Link>
                    <Link to="/foods">Foods</Link>
                    <Link to="/tourist-spots">Tourist Attractions</Link>
                </nav>
            </header>

            <main>
                <h2 className="section-title">Top 10 Tourist Attractions in Penang</h2>
                <div className="spots-list">
                    {topTouristSpots.map((spot) => (
                        <div key={spot.id} className="spot-card">
                            <img
                                src={`/images/${spot.image}`}
                                alt={spot.name}
                                className="spot-image"
                            />
                            <div className="spot-info">
                            <h3 className="spot-title">{spot.name}</h3>
                                <p className="spot-description">{spot.shortDescription}</p>
                                <Link to={`/touristspots/${spot.id}`} className="learn-more-button">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="homepage-footer">
                © 2025 Visit Penang. All rights reserved.
            </footer>
        </div>
    );
};

export default HomePage;
