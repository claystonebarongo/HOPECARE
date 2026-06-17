import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Updated tab name to 'MEDIA GALLERY' for explicit clarity
    const navItems = ['HOME', 'ABOUT', 'MEDIA GALLERY', 'IMPACT'];

    const handleNavClick = (item) => {
        setActiveTab(item);
        setMenuOpen(false); // Close mobile drawer when an item is selected
    };

    const handleDonateClick = () => {
        setActiveTab('IMPACT');
        setMenuOpen(false);

        // Wait briefly for App.jsx to render the IMPACT sections, then scroll down cleanly
        setTimeout(() => {
            const donationSection = document.querySelector('.donation-section');
            if (donationSection) {
                donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <nav className="glass-nav navbar-container">
            {/* Branding Zone - Updated Logo with Dove of Hope */}
            <div className="brand-zone" onClick={() => handleNavClick('HOME')} style={{ cursor: 'pointer' }}>
                <span className="brand-logo">🕊️</span>
                <div>
                    <h1 className="brand-title">Hope Care</h1>
                    <p className="brand-subtitle">Orphanage Kisii</p>
                </div>
            </div>

            {/* Hamburger Trigger Line Stack */}
            <div className={`hamburger-trigger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Nav Actions Drawer */}
            <div className={`nav-actions ${menuOpen ? 'mobile-show' : ''}`}>
                {navItems.map((item) => (
                    <span
                        key={item}
                        onClick={() => handleNavClick(item)}
                        className={`nav-link ${activeTab === item ? 'text-active' : 'text-muted'}`}
                    >
                        {item}
                    </span>
                ))}

                <button className="btn-glow" onClick={handleDonateClick}>DONATE</button>
            </div>
        </nav>
    );
}