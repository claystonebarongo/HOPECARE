import React from 'react';
import './CrusadeSection.css';

export default function CrusadeSection() {
    return (
        <section className="crusade-section">
            <div className="crusade-inner-wrapper">

                {/* SECTION HEADER */}
                <div className="crusade-header">
                    <span className="crusade-badge">KINGDOM ASSIGNMENT</span>
                    <h2 className="crusade-title">Operation Winning Souls</h2>
                </div>

                {/* BULLETPROOF VIDEO PLAYER CONTAINER */}
                <div className="crusade-video-wrapper">
                    <video
                        className="crusade-native-player"
                        src="/assets/gallery/crusadevideo.mp4"
                        controls
                        playsInline
                        preload="metadata"
                        controlsList="nodownload"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* HISTORICAL MISSION TEXT PROFILE */}
                <div className="crusade-text-content">
                    <p className="crusade-paragraph highlight-lead">
                        Under the divine mandate of the Great Commission, Pastor Hezborn Omongo Nyandwaro has launched a powerful move of God through Operation Winning Souls, taking the Gospel of Jesus Christ to every town, every village, and every corner of Kisii County.
                    </p>
                    <p className="crusade-paragraph">
                        Through dynamic open-air crusades, souls are being saved, lives transformed, the sick healed, and many are experiencing the power of God like never before. Pastor Hezborn Omongo Nyandwaro is preaching with boldness and anointing, declaring the good news of salvation across markets, towns, and rural villages, leaving no soul unreached!
                    </p>
                    <p className="crusade-paragraph">
                        This is not just a crusade, it’s a Kingdom assignment to bring revival, healing, and restoration to the people of Kisii. Souls are coming to Jesus, families are being restored, and darkness is losing its grip!
                    </p>

                    <div className="crusade-call-to-arms">
                        "Join us in prayer, join us in the field, and let’s labor together for the greatest harvest of souls in Kisii County."
                    </div>
                </div>

            </div>
        </section>
    );
}