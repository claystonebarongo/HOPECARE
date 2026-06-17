import React, { useState } from 'react';
import './ImpactPillars.css';

export default function ImpactPillars() {
    const [activeStory, setActiveStory] = useState(null);

    // Core Focus Areas Structured Data with Local Image Paths mapped directly
    const focusAreas = [
        {
            title: "Orphaned Children",
            category: "orphans",
            image: "/assets/gallery/IMG-20260616-WA0074.jpg",
            snippet: "Children who have lost both parents and fight daily against malnutrition, lack of schooling, and tropical diseases.",
            fullStory: "Few can imagine having no one to call family, yet this is a heartbreaking reality here in Kisii. Orphans who lose their mother and father face immediate vulnerability—lacking shelter, proper nutrition, and access to basic education. Hope Care steps in as their direct family, providing complete protective care, healthcare, and educational restoration so they never feel abandoned by the world."
        },
        {
            title: "Single-Parent Families",
            category: "single-parented",
            image: "/assets/gallery/IMG-20260616-WA0104.jpg",
            snippet: "Struggling single mothers and fathers overwhelmed by a severe lack of resources to support their kids' daily survival.",
            fullStory: "Many vulnerable children are left in the hands of isolated single parents who have been abandoned by their spouses. With households broken, single mothers or fathers face the crushing weight of poverty alone. Providing for an extra mouth to feed becomes an uphill battle, often leading to involuntary desperation. We uplift these single-parent units with nutritional support and educational material assistance."
        },
        {
            title: "Needy Children",
            category: "needy",
            image: "/assets/gallery/IMG-20260616-WA0144.jpg",
            snippet: "Kids living with their biological parents but trapped in deep poverty, requiring critical assistance to change their baseline.",
            fullStory: "Poverty should not rob a child of their childhood or safety. Needy children are those living in deeply impoverished local households alongside their biological parents. When domestic income dries up entirely due to economic hardships, risks of child labor and severe neglect skyrocket. Our outreach supplies critical food, healthcare aid, and school fees to help these families stabilize and thrive together."
        },
        {
            title: "Vulnerable & Rejected",
            category: "legitimate-rejection",
            image: "/assets/gallery/IMG-20260616-WA0078.jpg",
            snippet: "Children facing severe societal isolation, trauma, or rejection due to complex family and parental histories.",
            fullStory: "Societal stigma and cultural rejection leave many innocent children discarded out in the cold. Whether stemming from domestic trauma or parental crises, these little ones endure deep emotional scars from a very young age. Hope Care opens wide arms of unconditional Christian love—offering daily mental health support, emotional therapy, and a secure sanctuary where they can rediscover joy."
        }
    ];

    // Founder's Raw Testimony Log Text formatted beautifully
    const founderTestimony = {
        name: "Pastor Hezborn Nyandwaro",
        title: "Founder, Hope Care Orphanage",
        story: "I thank the Lord for His grace of all dimensions. I was brought up in a lowly, unstable family that couldn't afford to send me to school. Instead, I spiraled down, taking drugs and often sleeping on the bare roads and paths—a direct result of feeling complete rejection. I even felt the urge to end my own life because of that heavy spirit of rejection. But one day, when I went to our market center to buy drugs, I encountered an open crusade. I remember the theme vividly: 'Go back to your father' (Luke 15:20-24). That message pierced my soul. I took the little money I had left for drugs and connected it to the altar of God. I waited there until a servant of God picked me out of the crowd. They prayed for me, and from that moment, I began reading the Word of God slowly, discovering His divine purpose for my life.\n\nOne year later, the Holy Spirit convicted me to start a fellowship. We began with just two people, expanding to 15 within months. As we went out preaching across centers, we encountered a massive, heartbreaking challenge: helpless children on the streets who desperately needed support. Though we had zero financial resources, we trusted that He who called us is faithful. We began by taking in 5 children, meditating on the truth that 'God will provide through His richness in Glory.' That number grew day by day without an official budget, but the hand of God has miraculously carried us through. We welcome you with open arms to join us in expanding this sanctuary of hope."
    };

    return (
        <section className="impact-section-container">
            {/* Core Pillars Heading */}
            <div className="impact-header-zone">
                <span className="impact-badge">WHAT WE DO</span>
                <h2 className="impact-main-title">Our Core Focus Areas</h2>
                <p className="impact-subtitle">
                    How we serve vulnerable children with honesty, compassion, and unconditional love in Kisii, Kenya.
                </p>
            </div>

            {/* Focus Areas Grid with Dynamic Images */}
            <div className="impact-grid-layout">
                {focusAreas.map((area, idx) => (
                    <div key={idx} className="impact-card-wrapper">
                        <div className="impact-image-frame">
                            <img src={area.image} alt={area.title} className="impact-bg-photo" />
                            <div className="impact-photo-tint" />
                        </div>
                        <div className="impact-card-body">
                            <h3 className="impact-card-title">{area.title}</h3>
                            <p className="impact-card-desc">{area.snippet}</p>
                            <button
                                className="impact-unpack-link"
                                onClick={() => setActiveStory(area)}
                            >
                                Read Impact Breakdown ➔
                            </button>
                        </div>
                    </div>
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

            {/* --- DETAILED IMPACT UNPACKED MODAL WINDOW --- */}
            {activeStory && (
                <div className="story-lightbox-overlay" onClick={() => setActiveStory(null)}>
                    <div className="story-lightbox-panel" onClick={(e) => e.stopPropagation()}>
                        <button className="story-lightbox-close" onClick={() => setActiveStory(null)}>✕</button>

                        <div className="story-modal-hero">
                            <img src={activeStory.image} alt={activeStory.title} className="story-modal-img" />
                            <div className="story-modal-shade" />
                            <h3 className="story-modal-header-title">{activeStory.title}</h3>
                        </div>

                        <div className="story-modal-content-pane">
                            <span className="story-modal-tag">Hope Care Mission Case</span>
                            <p className="story-modal-longtext">{activeStory.fullStory}</p>

                            <div className="story-modal-callout">
                                <strong>With a current capacity expanding daily,</strong> your support directly funds food security, emergency medical aid, and school tuition fees for children facing these exact conditions.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}