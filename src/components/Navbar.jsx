import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Before & After', href: '#before-after' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glass-navbar shadow-2xl'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border border-[#C8A96A]/30 flex items-center justify-center bg-white/5 group-hover:border-[#C8A96A]/60 transition-colors">
            <span className="font-playfair text-[#C8A96A] font-bold text-lg">U</span>
          </div>
          <div className="flex flex-col">
            <span className="font-playfair text-xl tracking-[4px] font-bold text-white uppercase group-hover:text-glow-gold transition-all">
              UNIK
            </span>
            <span className="font-inter text-[8px] tracking-[3px] text-[#C8A96A] uppercase -mt-1">
              CAR CARE & SPA
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-inter text-xs tracking-widest text-[#B8B8B8] hover:text-white uppercase transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96A] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(200,169,106,0.2)] hover:shadow-[0_4px_25px_rgba(200,169,106,0.35)] overflow-hidden group"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Hamburger Trigger (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#C8A96A] focus:outline-none p-1 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5 absolute top-full left-0 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter text-sm tracking-widest text-[#B8B8B8] hover:text-white uppercase py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#C8A96A] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase py-4 rounded-full mt-4"
              >
                <span>Book Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
