import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Layout & Global Components
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppCTA from './components/WhatsAppCTA';
import StickyMobileBook from './components/StickyMobileBook';
import Navbar from './components/Navbar';
import StructuredData from './components/StructuredData';

// Page Sections
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import WhyChooseUs from './sections/WhyChooseUs';
import Services from './sections/Services';
import BeforeAfter from './sections/BeforeAfter';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Comparison from './sections/Comparison';
import Pricing from './sections/Pricing';
import Process from './sections/Process';
import Founder from './sections/Founder';
import FAQ from './sections/FAQ';
import BookingCTA from './sections/BookingCTA';
import Contact from './sections/Contact';
import Career from './sections/Career';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* JSON-LD Structured Data — injected into <head> for SEO */}
      <StructuredData />

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

            {/* Live Count-up Metrics - immediate trust signal after the hook */}
            <Stats />

            {/* Core Brand Offerings & Grid */}
            <WhyChooseUs />

            {/* Services Grid */}
            <Services />

            {/* Draggable Before & After Correction Slider - visual proof */}
            <BeforeAfter />

            {/* Masonry Image Portfolio - visual proof */}
            <Gallery />

            {/* Highlighted Patrons Reviews - social proof, before the pricing ask */}
            <Testimonials />

            {/* Comparison Tab Matrices */}
            <Comparison />

            {/* Pricing Packages Grid */}
            <Pricing />

            {/* Vertical Flow Timeline - how it works, reduces booking anxiety */}
            <Process />

            {/* Founder Story - trust reinforcement before objections/booking */}
            <Founder />

            {/* Collapsible FAQ Panels */}
            <FAQ />

            {/* Conversion Banner Section */}
            <BookingCTA />

            {/* Contact Form & Google Map */}
            <Contact />

            {/* Careers / Resume Application - secondary audience, kept below the customer funnel */}
            <Career />
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
