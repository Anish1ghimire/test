import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import EnhancedHeader from './components/EnhancedHeader';
import Home from './pages/Home';
import MinecraftHosting from './pages/game-hosting/MinecraftHosting';
import ArkHosting from './pages/game-hosting/ArkHosting';
import FiveMHosting from './pages/game-hosting/FiveMHosting';
import TerrariaHosting from './pages/game-hosting/TerrariaHosting';
import RustHosting from './pages/game-hosting/RustHosting';
import ValheimHosting from './pages/game-hosting/ValheimHosting';
import PalworldHosting from './pages/game-hosting/PalworldHosting';
import AMDVps from './pages/other-hosting/AMDVps';
import IntelVps from './pages/other-hosting/IntelVps';
import WebHosting from './pages/other-hosting/WebHosting';
import BotHosting from './pages/other-hosting/BotHosting';
import DomainSelling from './pages/other-hosting/DomainSelling';
import OurCommitment from './pages/important/OurCommitment';
import Career from './pages/important/Career';
import AboutUs from './pages/important/AboutUs';
import ContactUs from './pages/important/ContactUs';
import Infrastructure from './pages/important/Infrastructure';
import Partnership from './pages/important/Partnership';
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import UsagePolicy from './pages/legal/UsagePolicy';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <EnhancedHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Game Hosting Routes */}
        <Route path="/minecraft-hosting" element={<MinecraftHosting />} />
        <Route path="/ark-hosting" element={<ArkHosting />} />
        <Route path="/fivem-hosting" element={<FiveMHosting />} />
        <Route path="/terraria-hosting" element={<TerrariaHosting />} />
        <Route path="/rust-hosting" element={<RustHosting />} />
        <Route path="/valheim-hosting" element={<ValheimHosting />} />
        <Route path="/palworld-hosting" element={<PalworldHosting />} />
        
        {/* Other Hosting Routes */}
        <Route path="/amd-vps" element={<AMDVps />} />
        <Route path="/intel-vps" element={<IntelVps />} />
        <Route path="/web-hosting" element={<WebHosting />} />
        <Route path="/bot-hosting" element={<BotHosting />} />
        <Route path="/domain-selling" element={<DomainSelling />} />
        
        {/* Important Routes */}
        <Route path="/our-commitment" element={<OurCommitment />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/partnership" element={<Partnership />} />
        
        {/* Legal Routes */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/usage-policy" element={<UsagePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;