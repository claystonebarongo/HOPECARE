import React, { useState, useEffect } from 'react';
import './MediaGallery.css';

export default function MediaGallery() {
    const [lightboxVideo, setLightboxVideo] = useState(null);
    const [activePhotoIdx, setActivePhotoIdx] = useState(0);

    // Completely mapped with your exact files from public/assets/gallery/
    const galleryPhotos = [
        { id: 'p1', url: '/assets/gallery/IMG-20260616-WA0027.jpg', title: 'Moments of Childhood Joy' },
        { id: 'p2', url: '/assets/gallery/IMG-20260616-WA0032.jpg', title: 'Field Ministry Care Updates' },
        { id: 'p3', url: '/assets/gallery/IMG-20260616-WA0036.jpg', title: 'Community Fellowship Outreach' },
        { id: 'p4', url: '/assets/gallery/IMG-20260616-WA0074.jpg', title: 'Hope Care Orphans Safe Haven' },
        { id: 'p5', url: '/assets/gallery/IMG-20260616-WA0077.jpg', title: 'Providing Support and Care' },
        { id: 'p6', url: '/assets/gallery/IMG-20260616-WA0078.jpg', title: 'Sanctuary for the Rejected & Vulnerable' },
        { id: 'p7', url: '/assets/gallery/IMG-20260616-WA0080.jpg', title: 'Safe Shelter Facilities' },
        { id: 'p8', url: '/assets/gallery/IMG-20260616-WA0083.jpg', title: 'Honesty, Love, and Care Ministry' },
        { id: 'p9', url: '/assets/gallery/IMG-20260616-WA0088.jpg', title: 'Reaching Out to Vulnerable Hearts' },
        { id: 'p10', url: '/assets/gallery/IMG-20260616-WA0094.jpg', title: 'Hope Care Orphanage Main Story' },
        { id: 'p11', url: '/assets/gallery/IMG-20260616-WA0095.jpg', title: 'Nutritional Distribution Day' },
        { id: 'p12', url: '/assets/gallery/IMG-20260616-WA0100.jpg', title: 'Building Resources to Thrive' },
        { id: 'p13', url: '/assets/gallery/IMG-20260616-WA0103.jpg', title: 'Transforming Lives in Kisii' },
        { id: 'p14', url: '/assets/gallery/IMG-20260616-WA0104.jpg', title: 'Single Parent Family Outreach' },
        { id: 'p15', url: '/assets/gallery/IMG-20260616-WA0107.jpg', title: 'Overcoming Societal Challenges' },
        { id: 'p16', url: '/assets/gallery/IMG-20260616-WA0109.jpg', title: 'Smiles of Hope and Resilience' },
        { id: 'p17', url: '/assets/gallery/IMG-20260616-WA0111.jpg', title: 'Empowering the Next Generation' },
        { id: 'p18', url: '/assets/gallery/IMG-20260616-WA0113.jpg', title: 'A Chance at a Better Life' },
        { id: 'p19', url: '/assets/gallery/IMG-20260616-WA0118.jpg', title: 'Compassionate Community Network' },
        { id: 'p20', url: '/assets/gallery/IMG-20260616-WA0119.jpg', title: 'Restoring Childhood Horizons' },
        { id: 'p21', url: '/assets/gallery/IMG-20260616-WA0144.jpg', title: 'Needy Children Support Network' },
        { id: 'p22', url: '/assets/gallery/IMG-20260616-WA0148.jpg', title: 'Standing in Unity and Fellowship' },
        { id: 'p23', url: '/assets/gallery/IMG-20260616-WA0149.jpg', title: 'Dedicated Daily Assistance' },
        { id: 'p24', url: '/assets/gallery/IMG-20260616-WA0151.jpg', title: 'A Safe Haven from Distress' },
        { id: 'p25', url: '/assets/gallery/IMG-20260616-WA0152.jpg', title: 'Nourishing Body and Soul' },
        { id: 'p26', url: '/assets/gallery/IMG-20260616-WA0158.jpg', title: 'Walking Together in Love' },
        { id: 'p27', url: '/assets/gallery/IMG-20260616-WA0162.jpg', title: 'Spreading Light and Happiness' },
        { id: 'p28', url: '/assets/gallery/IMG-20260616-WA0163.jpg', title: 'Our Doors Open to the Community' }
    ];

    // FIXED: Formatted explicitly to valid /preview patterns to prevent blank rendering
    const galleryVideos = [
        {
            id: 'v1',
            videoUrl: 'https://drive.google.com/file/d/1lhmT8dNgOsr3Bf77K3oFHD3SXqXkT7_a/preview',
            thumbUrl: '/assets/backgrounds/IMG-20260616-WA0171.jpg',
            title: 'Hope Care Sanctuary Story',
            desc: 'An immersive video look inside our main sanctuary operations and facilities here in Kisii.'
        },
        {
            id: 'v2',
            videoUrl: 'https://drive.google.com/file/d/12Yck2qGYG1RdoUYHN-KcgYct3zwc15DC/preview',
            thumbUrl: '/assets/backgrounds/IMG-20260616-WA0175.jpg',
            title: 'Daily Welfare & Resource Management',
            desc: 'Providing structure, consistent nutritional frameworks, and protective care pipelines.'
        },
        {
            id: 'v3',
            videoUrl: 'https://drive.google.com/file/d/1MGuthr8h0OP5OsFxsT5dNuLWoOus1u9B/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0032.jpg',
            title: 'Field Ministry Milestones',
            desc: 'Documenting transformational update steps taken live out in the community.'
        },
        {
            id: 'v4',
            videoUrl: 'https://drive.google.com/file/d/1D2xtjVJnq56Kb9HN573B336IVVx2-eo3/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0036.jpg',
            title: 'Community Fellowship Highlights',
            desc: 'Gathering together in unity, faith outreach, and shared local encouragement sessions.'
        },
        {
            id: 'v5',
            videoUrl: 'https://drive.google.com/file/d/1xjaOVyX6qCn86M2ZGiS3Skf9ZpSlYvG2/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0095.jpg',
            title: 'Nutritional Support Day Log',
            desc: 'Providing robust food resource provisions directly to vulnerable young hearts.'
        },
        {
            id: 'v6',
            videoUrl: 'https://drive.google.com/file/d/1ResQ_u7Dt4ziJ-ktT8Lj1oU_Jd373lC0/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0100.jpg',
            title: 'Building Sustainable Horizons',
            desc: 'Empowering children with the tools, stability, and education to thrive.'
        },
        {
            id: 'v7',
            videoUrl: 'https://drive.google.com/file/d/1YghkUWfWR9AxRcG905Ye-xuiF3lbvxOe/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0104.jpg',
            title: 'Single-Parent Household Care',
            desc: 'Extending dedicated intervention programs to families facing socioeconomic limits.'
        },
        {
            id: 'v8',
            videoUrl: 'https://drive.google.com/file/d/1HnDdN0hp4ZVpYURWzSxP4MxL9AmEBcMz/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0118.jpg',
            title: 'Compassion Network in Action',
            desc: 'Real stories of care, dedication, and immediate rescue assistance from distress.'
        },
        {
            id: 'v9',
            videoUrl: 'https://drive.google.com/file/d/1p_zvHo7ZRuJcoWJEeO479NONL08UqLMK/preview',
            thumbUrl: '/assets/gallery/IMG-20260616-WA0149.jpg',
            title: 'Daily Operational Dedication',
            desc: 'A closer look at our daily focus on love, transparency, and childhood protection.'
        }
    ];

    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            handleNextPhoto();
        }, 5000);
        return () => clearInterval(autoPlayTimer);
    }, [activePhotoIdx]);

    const handlePrevPhoto = () => {
        setActivePhotoIdx((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
    };

    const handleNextPhoto = () => {
        setActivePhotoIdx((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="gallery-section">
            <div className="gallery-header">
                <span className="gallery-badge">MEDIA LOG</span>
                <h2 className="gallery-main-title">Moments of Joy & Impact</h2>
                <p className="gallery-subtitle">Real updates documented straight from our daily field ministry.</p>
            </div>

            {/* --- SECTION 1: PHOTOS SHOWCASE --- */}
            <div className="gallery-block-division">
                <h3 className="gallery-sub-divider">📸 Captured Fields & Ministry Photos</h3>
                <div className="single-photo-showcase-container">
                    <button className="showcase-nav-btn prev" onClick={handlePrevPhoto} aria-label="Previous image">❮</button>
                    <div className="showcase-display-frame">
                        <img
                            src={galleryPhotos[activePhotoIdx].url}
                            alt={galleryPhotos[activePhotoIdx].title}
                            className="showcase-img-core"
                        />
                        <div className="showcase-label-overlay">
                            <span className="showcase-counter">
                                {activePhotoIdx + 1} / {galleryPhotos.length}
                            </span>
                            <h4 className="showcase-caption">{galleryPhotos[activePhotoIdx].title}</h4>
                        </div>
                    </div>
                    <button className="showcase-nav-btn next" onClick={handleNextPhoto} aria-label="Next image">❯</button>
                </div>
                <div className="showcase-dot-indicators">
                    {galleryPhotos.map((_, idx) => (
                        <span
                            key={idx}
                            className={`indicator-dot ${idx === activePhotoIdx ? 'active' : ''}`}
                            onClick={() => setActivePhotoIdx(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* --- SECTION 2: VIDEOS DISPLAY GRID --- */}
            <div className="gallery-block-division">
                <h3 className="gallery-sub-divider">🎥 Documented Video Updates</h3>
                <div className="videos-display-grid">
                    {galleryVideos.map((video) => (
                        <div key={video.id} className="video-card-node">
                            <div className="video-thumb-container">
                                <img src={video.thumbUrl} alt={video.title} className="video-placeholder-cover" />
                                <div className="video-shade-tint" />
                                <button
                                    className="video-central-play-btn"
                                    onClick={() => setLightboxVideo(video)}
                                    aria-label="Play video"
                                >
                                    <span className="play-icon-triangle">▶</span>
                                </button>
                            </div>
                            <div className="video-info-footer">
                                <h4 className="video-card-title">{video.title}</h4>
                                <p className="video-card-desc">{video.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FIXED LIGHTBOX OVERLAY WINDOW --- */}
            {lightboxVideo && (
                <div className="gallery-lightbox-overlay" onClick={() => setLightboxVideo(null)}>
                    <div className="gallery-lightbox-box" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-lightbox-close" onClick={() => setLightboxVideo(null)}>✕</button>

                        <div className="gallery-lightbox-display">
                            {/* FIXED: Added strict sandbox flags and allowed cross-origin parameters to bypass Google embedding limits */}
                            <iframe
                                src={lightboxVideo.videoUrl}
                                className="lightbox-video-player"
                                title={lightboxVideo.title}
                                frameBorder="0"
                                allow="autoplay; scrambled-id; encrypted-media"
                                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                allowFullScreen
                            />
                        </div>

                        <div className="gallery-lightbox-footer">
                            <h3>{lightboxVideo.title}</h3>
                            <p>{lightboxVideo.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}