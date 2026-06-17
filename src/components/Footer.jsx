import React from 'react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-node">
            <div className="footer-content-wrap">

                {/* BRANDING LOGO & MISSION STATEMENT METADATA */}
                <div className="footer-brand-section">
                    <div className="footer-brand">
                        <i className="fa-solid fa-dove brand-icon-vector"></i> Hopecare Orphanage Kisii
                    </div>
                    <p className="footer-brand-desc">
                        Working with honesty, love, and care to provide vulnerable children with the protective sanctuary and resources they need to thrive.
                    </p>
                    <div className="footer-copyright">
                        &copy; {currentYear} All Rights Reserved. Built with faith and compassion.
                    </div>
                </div>

                {/* LOCATIONAL & PHYSICAL INTERACTION METRICS */}
                <div className="footer-meta-contact">
                    <h4>OUR SANCTUARY</h4>
                    <p className="contact-detail-row">
                        <i className="fa-solid fa-location-dot map-marker-icon"></i> Kisii, Kenya
                    </p>
                    <p className="contact-detail-row">
                        <i className="fa-solid fa-church contact-vector-icon"></i> Faith & Hope Community Network
                    </p>
                    <p className="contact-detail-row">
                        <i className="fa-solid fa-phone contact-vector-icon"></i> +254 114 565 070
                    </p>
                </div>

                {/* SOCIAL CONNECTION MEDIA LINKS HUB */}
                <div className="footer-social-section">
                    <h4>CONNECT WITH US</h4>
                    <p className="social-cta-text">Follow our daily transformation stories straight from the field ministry.</p>

                    <div className="social-icons-matrix">
                        {/* Real Facebook Brand Icon */}
                        <a
                            href="https://www.facebook.com/share/1B8aB4AQzt/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link icon-fb"
                            title="Visit Facebook Page"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        {/* Real WhatsApp Brand Icon */}
                        <a
                            href="https://wa.me/254114565070"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link icon-wa"
                            title="Chat on WhatsApp"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>

                        {/* Real Phone Dial Action Icon */}
                        <a
                            href="tel:+254114565070"
                            className="social-icon-link icon-tel"
                            title="Call Hotline"
                        >
                            <i className="fa-solid fa-phone-flip"></i>
                        </a>

                        {/* Real Instagram Aesthetic Icon Placeholder */}
                        <a
                            href="#instagram"
                            onClick={(e) => e.preventDefault()}
                            className="social-icon-link icon-ig"
                            title="Instagram coming soon"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        {/* Real X / Twitter Aesthetic Icon Placeholder */}
                        {/* <a
                            href="#x"
                            onClick={(e) => e.preventDefault()}
                            className="social-icon-link icon-x"
                            title="X / Twitter coming soon"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a> */}
                    </div>
                </div>

            </div>
        </footer>
    );
}