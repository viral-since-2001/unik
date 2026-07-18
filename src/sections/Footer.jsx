import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-[#0B0B0B] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background soft reflections */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#C8A96A]/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-5">
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
            <p className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide max-w-sm mt-2">
              Beverly Hills' premier detailing studio. Dedicated to preserving value, locking in showroom gloss, and restoring automotive luxury.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#B8B8B8] hover:text-[#C8A96A] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#B8B8B8] hover:text-[#C8A96A] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/5 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#B8B8B8] hover:text-[#C8A96A] transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-inter text-xs font-semibold text-white tracking-[2px] uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {['Home', 'Services', 'Packages', 'Before & After', 'Gallery', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace('& ', '').replace(' ', '-')}`}
                    className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-inter text-xs font-semibold text-white tracking-[2px] uppercase">
              Treatments
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#services" className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors">
                  Foam Wash & Decontam
                </a>
              </li>
              <li>
                <a href="#services" className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors">
                  Bespoke Interior Detail
                </a>
              </li>
              <li>
                <a href="#services" className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors">
                  Elite Exterior Polishing
                </a>
              </li>
              <li>
                <a href="#services" className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors">
                  Ceramic Paint Coating
                </a>
              </li>
              <li>
                <a href="#services" className="font-inter text-xs tracking-wider text-[#B8B8B8] hover:text-[#C8A96A] transition-colors">
                  Paint Protection Film (PPF)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (Col 10-12) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-inter text-xs font-semibold text-white tracking-[2px] uppercase">
              Newsletter
            </h4>
            <p className="font-inter text-xs text-[#B8B8B8] font-light leading-relaxed tracking-wide">
              Subscribe to receive private styling guides, package promotions, and detailing tips.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C8A96A] transition-colors font-inter text-xs pr-10"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 text-white/40 hover:text-[#C8A96A] p-1.5 focus:outline-none transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[#34D399] font-inter text-[10px] tracking-wide font-medium">
                  Successfully subscribed!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="font-inter text-[10px] tracking-wider text-[#B8B8B8] font-light text-center sm:text-left">
            © {new Date().getFullYear()} UNIK CAR CARE & SPA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#faq" className="font-inter text-[10px] tracking-wider text-[#B8B8B8] hover:text-white uppercase font-light">
              Privacy Policy
            </a>
            <a href="#faq" className="font-inter text-[10px] tracking-wider text-[#B8B8B8] hover:text-white uppercase font-light">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
