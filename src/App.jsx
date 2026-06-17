import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactPillars from './components/ImpactPillars';
import FounderStory from './components/FounderStory';
import MediaGallery from './components/MediaGallery';
import DonationPanel from './components/DonationPanel';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeTab, setActiveTab] = useState('HOME');

  // FIXED: Converted layout into a vertical flex column stretching down the viewport
  const mainWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0a0f1e',
    position: 'relative',
    overflowX: 'hidden'
  };

  const renderContent = () => {
    if (isAdminMode) {
      return (
        <div style={{ padding: '120px 20px', textAlign: 'center', color: '#94a3b8' }}>
          <h2>Admin Content Engine Active</h2>
          <p>The structural codebase is ready. We can configure data binding routes here later.</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'ABOUT':
        return (
          <>
            <FounderStory />
          </>
        );
      case 'MEDIA GALLERY': // FIXED: Added routing case matched to your updated Navbar choice
        return (
          <>
            <MediaGallery />
          </>
        );
      case 'IMPACT':
        return (
          <>
            <ImpactPillars />
            <DonationPanel />
          </>
        );
      case 'HOME':
      default:
        return (
          <>
            <Hero setActiveTab={setActiveTab} />
            <ImpactPillars />
            <FounderStory />
            <MediaGallery />
            <DonationPanel />
          </>
        );
    }
  };

  return (
    <div style={mainWrapperStyle}>
      <Navbar
        isAdmin={isAdminMode}
        onAdminClick={() => setIsAdminMode(!isAdminMode)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* FIXED: Wrapped rendering blocks in a flex-grow main tag. 
          This forces your tab content to claim all remaining empty space,
          keeping the footer glued firmly to the bottom of the screen! */}
      <main style={{ flex: '1 0 auto', width: '100%' }}>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}