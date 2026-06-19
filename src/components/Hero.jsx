import React, { useState, useEffect } from 'react';
import { infoData } from '../data/siteContent.js';
import './Hero.css';

export default function Hero({ setActiveTab }) {
    const [showVideo, setShowVideo] = useState(false);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    // Dynamic high-impact background sequence
    const backgroundImages = [
        "/assets/backgrounds/IMG-20260616-WA0171.jpg",
        "/assets/backgrounds/IMG-20260616-WA0172.jpg",
        "/assets/backgrounds/IMG-20260616-WA0175.jpg",
        "/assets/backgrounds/IMG-20260616-WA0223.jpg"
    ];

    // ROOT PATH RESOLUTION: Maps directly to public/assets/videos/
    const localVideoSource = "/assets/videos/VID-20260616-WA0209.mp4";

    // Auto-advance loop for background cross-fade transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <section className="hero-container">
            {/* Background Slideshow Engine */}
            <div className="hero-slider-track">
                {backgroundImages.map((imgUrl, index) => (
                    <div
                        key={imgUrl}
                        className={`hero-bg-layer ${index === currentBgIndex ? 'layer-active' : ''}`}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                ))}
                <div className="hero-darkness-shroud" />
            </div>

            {/* Central Super Glass Display Card */}
            <div className="glass-panel hero-card">
                <span className="org-tag">
                    {infoData.organization?.name || "HOPE CARE ORPHANAGE KISII KENYA"}
                </span>

                <h1 className="hero-title">
                    TRANSFORMING TRAGEDY<br />
                    <span className="gradient-highlight">INTO DIVINE DESTINY.</span>
                </h1>

                <p className="hero-desc">
                    Every child deserves a haven. Join us in providing safety, restoration, and unconditional love to orphans and vulnerable families in Kisii, Kenya.
                </p>

                {/* Dual Action Interaction Buttons Layout */}
                <div className="hero-btn-group">
                    <button
                        className="btn-glow btn-hero-width"
                        onClick={() => setActiveTab('IMPACT')}
                    >
                        LEARN MORE
                    </button>

                    <button
                        onClick={() => setShowVideo(true)}
                        className="btn-outline btn-hero-width btn-video-trigger"
                    >
                        <span>WATCH OUR STORY</span>
                        <span className="play-arrow"> ▶</span>
                    </button>
                </div>
            </div>

            {showVideo && (
                <div className="lightbox-overlay" onClick={() => setShowVideo(false)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setShowVideo(false)}>✕</button>

                        {/* Native video element explicitly configured for cross-browser playback */}
                        <video
                            className="lightbox-video-element"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src={localVideoSource} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}