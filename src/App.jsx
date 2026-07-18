import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout & Global Components
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppCTA from './components/WhatsAppCTA';
import StickyMobileBook from './components/StickyMobileBook';
import Navbar from './components/Navbar';

// Page Sections
import Hero from './sections/Hero';
import WhyChooseUs from './sections/WhyChooseUs';
import Services from './sections/Services';
import Comparison from './sections/Comparison';
import Process from './sections/Process';
import BeforeAfter from './sections/BeforeAfter';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import BookingCTA from './sections/BookingCTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Intro Loader Animation Screen */}
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden selection:bg-[#C8A96A] selection:text-[#0B0B0B]">
          
          {/* Custom Trailing Spring Cursor (Desktop only) */}
          <CustomCursor />

          {/* Sticky Responsive Header */}
          <Navbar />

          {/* Core Content Layout */}
          <main>
            {/* Immersive Parallax Intro */}
            <Hero />
            
            {/* Core Brand Offerings & Grid */}
            <WhyChooseUs />
            
            {/* Services Grid */}
            <Services />
            
            {/* Comparison Tab Matrices */}
            <Comparison />
            
            {/* Vertical Flow Timeline */}
            <Process />
            
            {/* Draggable Before & After Correction Slider */}
            <BeforeAfter />
            
            {/* Pricing Packages Grid */}
            <Pricing />
            
            {/* Live Count-up Metrics */}
            <Stats />
            
            {/* Masonry Image Portfolio */}
            <Gallery />
            
            {/* Carousel Patrons Reviews */}
            <Testimonials />
            
            {/* Collapsible FAQ Panels */}
            <FAQ />
            
            {/* Conversion Banner Section */}
            <BookingCTA />
            
            {/* Contact Form & Google Map */}
            <Contact />
          </main>

          {/* Grid Footer */}
          <Footer />

          {/* Floating UI Elements */}
          <ScrollToTop />
          <WhatsAppCTA />
          <StickyMobileBook />

        </div>
      )}
    </>
  );
}
