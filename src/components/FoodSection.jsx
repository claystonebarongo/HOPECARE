import React from 'react';
import './FoodSection.css';

export default function FoodSection() {
    return (
        <section className="food-section">
            <div className="food-inner-wrapper">
                <div className="food-container">

                    {/* LEFT SIDE: THE REVERSED 3-PHOTO MASONRY GRID (MEALTIME ASSETS) */}
                    <div className="food-gallery-side">
                        <div className="food-grid-wrapper">
                            <div className="food-img-card food-card-large">
                                <img src="/assets/gallery/Food1.jpg" alt="Children having a meal together" />
                            </div>
                            <div className="food-img-card food-card-small-top">
                                <img src="/assets/gallery/Food2.jpg" alt="Food preparation and nutrition" />
                            </div>
                            <div className="food-img-card food-card-small-bottom">
                                <img src="/assets/gallery/Food3.jpg" alt="Healthy meals distribution" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: THE TEXT DESCRIPTION & MATH BREAKDOWN */}
                    <div className="food-content-side">
                        <span className="food-badge">NUTRITION & CARE</span>
                        <h2 className="food-title">Sponsor a Child's Meals</h2>
                        <p className="food-desc">
                            It takes exactly $28 a month to completely provide nutritious, daily food for one child at our sanctuary. Currently, we have 84 children in total under our care depending on these meals.
                        </p>
                        <p className="food-desc">
                            We are prayerfully looking for compassionate donors who will stand for each child individually, or even a visionary partner who can stand for all of them. Every contribution brings health, strength, and joy to these little ones.
                        </p>

                        {/* HIGH-CONTRAST TARGETED WESTERN UNION TRIGGER */}
                        <a
                            href="https://www.westernunion.com/us/en/send-money-to-kenya.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="food-action-btn"
                        >
                            Sponsor Meals Now ➔
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}