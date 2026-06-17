import React from 'react';
import { infoData } from '../data/siteContent';
import './FounderStory.css';

export default function FounderStory() {
    return (
        <section className="founder-section">
            <div className="glass-panel founder-container">
                {/* Visual Identity Frame */}
                <div className="founder-image-frame">
                    <div className="founder-placeholder-avatar">

                        <img src="public/assets/gallery/IMG-20260616-WA0149.jpg" alt="" className='yoo' />

                    </div>
                    <h3 className="founder-card-name">{infoData.founder.name}</h3>
                    <p className="founder-card-role">Founder & Visionary</p>
                    <div className="founder-accent-line"></div>
                </div>

                {/* Narrative Text Column */}
                <div className="founder-text-column">
                    <h2 className="founder-section-title">Our Origin Story</h2>
                    <p className="founder-narrative">
                        {infoData.founder.story}
                    </p>
                    <div className="scripture-quote">
                        <span className="quote-mark">“</span>
                        <p className="quote-text">
                            "For this my son was dead, and is alive again; he was lost, and is found."
                            <span className="quote-reference">— Luke 15:24</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}