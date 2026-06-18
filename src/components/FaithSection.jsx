import React from 'react';
import './FaithSection.css';

export default function FaithSection() {
    return (
        <section className="faith-section">
            <div className="faith-inner-wrapper">
                <div className="faith-container">

                    {/* TEXT CONTENT COLUMN */}
                    <div className="faith-content-side">
                        <span className="faith-badge">OUR SPIRITUAL FOUNDATION</span>
                        <h2 className="faith-title">Hope and Life Care Missions</h2>
                        <p className="faith-desc">
                            Hope and Life Care Missions emphasizes spiritual care. All the children attend church on site together weekly where they are presented with the gospel.
                        </p>
                        <p className="faith-desc">
                            Morning and evening devotion time as well as a mid-week service provide them a faith-building environment that fosters a genuine relationship with Christ.
                        </p>
                    </div>

                    {/* VISUAL IMAGE COLUMN */}
                    <div className="faith-image-side">
                        <div className="faith-image-frame">
                            <img
                                src="/assets/gallery/Faith1.jpg"
                                alt="Faith and Hope community ministry"
                                className="faith-hero-img"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}