import React from 'react';
import './DonationPanel.css';

export default function DonationPanel() {
    return (
        <section className="donation-section">
            <div className="donation-container">

                {/* LEFT COLUMN: VISUAL STORY & CONTENT HERO */}
                <div className="donation-story-side">
                    <span className="donation-badge">MAKE AN IMPACT</span>
                    <h2 className="donation-main-title">
                        INTERESTED IN DONATING TO CHANGE THE LIFE OF A CHILD? THEN HOPECARE SHOULD BE THE HOME OF YOUR CHOICE.
                    </h2>

                    <div className="story-image-frame">
                        <img
                            src="assets/gallery/IMG-20260616-WA0095.jpg"
                            alt="Hopecare Outreach and Support"
                            className="story-hero-img"
                        />
                    </div>

                    <div className="story-text-content">
                        <p>
                            <strong>I am Hezborn Nyandwaro.</strong>
                        </p>
                        <p>
                            Welcome to Hope Care Orphanage Kisii, Kenya, where we strive to help vulnerable children in need. We are a group of individuals driven by a passion to make a difference in the lives of these children. We believe that every child deserves a chance at a better life, and we are committed to providing support and care for those who have been orphaned, raised by single parents, living in poverty, or facing societal rejection.
                        </p>
                        <p>
                            Our mission is to work with honesty, love, and care to provide these children with the resources they need to thrive. We believe that through a partnership with churches, organizations, and individuals who share our passion, we can make a significant impact on the lives of these children.
                        </p>
                        <p>
                            We are currently helping children in four main categories: orphans, single-parented children, needy children, and legitimate children. Orphans are those who have lost both parents and face challenges such as poor nutrition, lack of education, and tropical diseases. Single-parented children often struggle with a lack of support and resources and need assistance in their daily lives. Needy children are those who are living with their biological parents in poverty and require help to improve their circumstances. Legitimate children are those who face societal rejection due to their parents' circumstances and need support to overcome these challenges.
                        </p>
                        <blockquote>
                            "If you have a heart for helping children and want to work with us, we welcome you with open arms. Together, we can make a difference in the lives of these children and give them hope for the future. Thank you for considering joining us in this important work."
                        </blockquote>
                        <h4 className="story-cta-footer">JOIN US FIGHT FOR A BETTER COMMUNITY.</h4>
                    </div>
                </div>


                <div className="donation-channels-side">

                    {/* M-Pesa / Mobile Remittance Card */}
                    <div className="glass-panel method-card">
                        <div className="method-header">
                            <span className="method-icon">📱</span>
                            <h3>MOBILE REMITTANCE</h3>
                        </div>
                        <div className="mpesa-hero-box">
                            <p className="mpesa-label">DONATE THROUGH MPESA:</p>
                            <h2 className="mpesa-number">+254 114 565 070</h2>
                        </div>
                        <p className="mpesa-instructions">
                            *Please open M-Pesa on your device, choose Send Money, enter the number above carefully, and verify the recipient details match the organization representation before entering your PIN.
                        </p>
                    </div>

                    {/* Western Union Money Transfer Card */}
                    <div className="glass-panel method-card">
                        <div className="method-header">
                            <span className="method-icon">💵</span>
                            <h3>WESTERN UNION MONEY TRANSFER</h3>
                        </div>
                        <p className="remittance-desc">
                            Supporters can send donations through Western Union using the following link:
                        </p>
                        <a
                            href="https://www.westernunion.com/us/en/send-money-to-kenya.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="western-union-link-btn"
                        >
                            Western Union Kenya Transfers ➔
                        </a>
                    </div>

                    {/* Alternative Money Transfer Services Card */}
                    <div className="glass-panel method-card">
                        <div className="method-header">
                            <span className="method-icon">🌍</span>
                            <h3>ALTERNATIVE TRANSFER SERVICES</h3>
                        </div>
                        <p className="remittance-desc">
                            Donations can also be sent through these international money transfer services available worldwide:
                        </p>

                        <div className="alternative-services-grid">
                            <div className="service-sub-card">
                                <h4>MoneyGram</h4>
                                <p>International money transfer service available worldwide.</p>
                            </div>
                            <div className="service-sub-card">
                                <h4>Ria Money Transfer</h4>
                                <p>International money transfer service available worldwide.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bank Wire Routing Card */}
                    <div className="glass-panel method-card">
                        <div className="method-header">
                            <span className="method-icon">🏦</span>
                            <h3>BANK ACCOUNT DETAILS</h3>
                        </div>
                        <div className="routing-table">
                            <div className="routing-row">
                                <span className="row-label">BANK NAME:</span>
                                <span className="row-val">COOPERATIVE BANK OF KENYA</span>
                            </div>
                            <div className="routing-row">
                                <span className="row-label">ACCOUNT NAME:</span>
                                <span className="row-val">Hope caorpha kisike</span>
                            </div>
                            <div className="routing-row">
                                <span className="row-label">ACCOUNT NUMBER:</span>
                                <span className="row-val highlight-green">01101171427001</span>
                            </div>
                            <div className="routing-row">
                                <span className="row-label">BANK SWIFT CODE:</span>
                                <span className="row-val highlight-green">KCOOKENA</span>
                            </div>
                            <div className="routing-row">
                                <span className="row-label">BRANCH NAME:</span>
                                <span className="row-val">KISII</span>
                            </div>
                        </div>
                    </div>

                    {/* Primary Explicit Call to Action Trigger */}
                    <a href="tel:+254746475311" className="donate-now-action-btn">
                        💖 Donate Now
                    </a>

                </div>

            </div>
        </section>
    );
}