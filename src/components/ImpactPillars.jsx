import React from 'react';
import './ImpactPillars.css';

export default function ImpactPillars() {
    const focusAreas = [
        {
            title: "Orphaned Children",
            category: "orphans",
            image: "/assets/gallery/IMG-20260616-WA0074.jpg",
            snippet: "Children who have lost both parents and fight daily against malnutrition, lack of schooling, and tropical diseases."
        },
        {
            title: "Single-Parent Families",
            category: "single-parented",
            image: "/assets/gallery/IMG-20260616-WA0104.jpg",
            snippet: "Struggling single mothers and fathers overwhelmed by a severe lack of resources to support their kids' daily survival."
        },
        {
            title: "Needy Children",
            category: "needy",
            image: "/assets/gallery/IMG-20260616-WA0144.jpg",
            snippet: "Kids living with their biological parents but trapped in deep poverty, requiring critical assistance to change their baseline."
        },
        {
            title: "Vulnerable & Rejected",
            category: "legitimate-rejection",
            image: "/assets/gallery/IMG-20260616-WA0078.jpg",
            snippet: "Children facing severe societal isolation, trauma, or rejection due to complex family and parental histories."
        }
    ];

    const founderTestimony = {
        name: "Pastor Hezborn Nyandwaro",
        title: "Founder, Hope Care Orphanage",
        story: "I thank the Lord for His grace of all dimensions. I was brought up in a lowly, unstable family that couldn't afford to send me to school. Instead, I spiraled down, taking drugs and often sleeping on the bare roads and paths—a direct result of feeling complete rejection. I even felt the urge to end my own life because of that heavy spirit of rejection. But one day, when I went to our market center to buy drugs, I encountered an open crusade. I remember the theme vividly: 'Go back to your father' (Luke 15:20-24). That message pierced my soul. I took the little money I had left for drugs and connected it to the altar of God. I waited there until a servant of God picked me out of the crowd. They prayed for me, and from that moment, I began reading the Word of God slowly, discovering His divine purpose for my life.\n\nOne year later, the Holy Spirit convicted me to start a fellowship. We began with just two people, expanding to 15 within months. As we went out preaching across centers, we encountered a massive, heartbreaking challenge: helpless children on the streets who desperately needed support. Though we had zero financial resources, we trusted that He who called us is faithful. We began by taking in 5 children, meditating on the truth that 'God will provide through His richness in Glory.' That number grew day by day without an official budget, but the hand of God has miraculously carried us through. We welcome you with open arms to join us in expanding this sanctuary of hope."
    };

    return (
        <section className="impact-section-container">
            <div className="impact-inner-content">

                {/* Core Pillars Heading */}
                <div className="impact-header-zone">
                    <span className="impact-badge">WHAT WE DO</span>
                    <h2 className="impact-main-title">Our Core Focus Areas</h2>
                    <p className="impact-subtitle">
                        How we serve vulnerable children with honesty, compassion, and unconditional love in Kisii, Kenya.
                    </p>
                </div>

                {/* Focus Areas Grid - Pure Presentation View without Popup Interactivity */}
                <div className="impact-grid-layout">
                    {focusAreas.map((area, idx) => (
                        <article key={idx} className="impact-card-wrapper">
                            <div className="impact-image-frame">
                                <img src={area.image} alt={area.title} className="impact-bg-photo" />
                                <div className="impact-photo-tint" />
                            </div>
                            <div className="impact-card-body">
                                <h3 className="impact-card-title">{area.title}</h3>
                                <p className="impact-card-desc">{area.snippet}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* --- FOUNDER'S TESTIMONY PROFILE ZONE --- */}
                <div className="founder-testimony-block">
                    <div className="founder-quote-card">
                        <div className="founder-meta">
                            <div className="founder-avatar-placeholder">🙏</div>
                            <div>
                                <h4 className="founder-name">{founderTestimony.name}</h4>
                                <p className="founder-title">{founderTestimony.title}</p>
                            </div>
                        </div>
                        <blockquote className="founder-speech">
                            "{founderTestimony.story.split('\n\n')[0]}"
                        </blockquote>
                        <p className="founder-speech-extended">
                            "{founderTestimony.story.split('\n\n')[1]}"
                        </p>
                        <div className="scripture-badge">Luke 15:20-24</div>
                    </div>
                </div>

            </div>
        </section>
    );
}