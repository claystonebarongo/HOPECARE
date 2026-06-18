import React from 'react';
import './EducationSection.css';

export default function EducationSection() {
    return (
        <section className="edu-section">
            <div className="edu-inner-wrapper">
                <div className="edu-container">

                    {/* LEFT SIDE: THE TEXT DESCRIPTION & COST BREAKDOWN */}
                    <div className="edu-content-side">
                        <span className="edu-badge">ACADEMIC EMPOWERMENT</span>
                        <h2 className="edu-title">Education & Uniform Support</h2>
                        <p className="edu-desc">
                            In a single academic term, we require $4,100 for all children in education per term/semester. This critical coverage ensures our children can stay in school, wear their proper uniforms, and secure essential resources.
                        </p>
                        <p className="edu-desc">
                            By backing our academic program, you directly provide educational stability, uniform kits, textbooks, and registration for these bright young minds.
                        </p>

                        {/* HIGH-CONTRAST TARGETED WESTERN UNION TRIGGER */}
                        <a
                            href="https://www.westernunion.com/us/en/send-money-to-kenya.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="edu-action-btn"
                        >
                            Donate Now via Western Union ➔
                        </a>
                    </div>

                    {/* RIGHT SIDE: THE 3-PHOTO MASONRY GRID (UNIFORM ASSETS) */}
                    <div className="edu-gallery-side">
                        <div className="edu-grid-wrapper">
                            <div className="edu-img-card card-large">
                                <img src="/assets/gallery/Education1.jpg" alt="Children wearing uniforms" />
                            </div>
                            <div className="edu-img-card card-small-top">
                                <img src="/assets/gallery/Education2.jpg" alt="Classroom support" />
                            </div>
                            <div className="edu-img-card card-small-bottom">
                                <img src="/assets/gallery/Education3.jpg" alt="School materials distribution" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}