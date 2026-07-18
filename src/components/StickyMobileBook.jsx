import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function StickyMobileBook() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight - 100;
      
      const contactElement = document.getElementById('contact');
      let contactTop = document.documentElement.scrollHeight;
      
      if (contactElement) {
        contactTop = contactElement.offsetTop - 500;
      }

      // Show button only when scrolled past hero and not yet near contact form
      if (scrolled > heroHeight && scrolled < contactTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 w-full p-4 bg-[#0B0B0B]/85 backdrop-blur-md border-t border-white/5 z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] lg:hidden"
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-2 w-full bg-[#C8A96A] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase py-4 rounded-full shadow-[0_4px_15px_rgba(200,169,106,0.2)] active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
