import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { CatalogSection } from './components/CatalogSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoorGuideSection } from './components/DoorGuideSection';
import { AboutSection } from './components/AboutSection';
import { CallToAction } from './components/CallToAction';
import { ShowroomContact } from './components/ShowroomContact';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DoorModal } from './components/DoorModal';
import { CodeViewerModal } from './components/CodeViewerModal';
import { DoorItem, CategoryType } from './data/doorsData';

export default function App() {
  const [selectedDoor, setSelectedDoor] = useState<DoorItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All Doors');
  const [codeViewerOpen, setCodeViewerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-zinc-900 flex flex-col selection:bg-[#E5B83B] selection:text-zinc-950">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 4 Core Product Categories */}
        <ProductsSection onSelectCategory={(cat) => setActiveCategory(cat)} />

        {/* Full Interactive Catalog & Gallery */}
        <CatalogSection
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onSelectDoor={(door) => setSelectedDoor(door)}
        />

        {/* Why Choose TOF4 DOORS */}
        <WhyChooseUs />

        {/* Interactive Door Guide & Sizing Helper */}
        <DoorGuideSection />

        {/* About TOF4 DOORS */}
        <AboutSection />

        {/* Dramatic CTA */}
        <CallToAction />

        {/* Showroom Location & Contact */}
        <ShowroomContact />
      </main>

      {/* Footer */}
      <Footer onOpenCodeViewer={() => setCodeViewerOpen(true)} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />

      {/* Door Details / Lightbox Modal */}
      <DoorModal door={selectedDoor} onClose={() => setSelectedDoor(null)} />

      {/* In-App Code Viewer Modal */}
      <CodeViewerModal isOpen={codeViewerOpen} onClose={() => setCodeViewerOpen(false)} />
    </div>
  );
}
