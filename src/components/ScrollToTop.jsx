import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (scrollHeight > 0) {
        setScrollProgress((scrolled / scrollHeight) * 100);
      }

      if (scrolled > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG parameters for progress ring
  const radius = 22;
  const stroke = 2.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-24 md:bottom-6 z-40 flex items-center justify-center w-12 h-12 rounded-full glass-card hover:border-[#C8A96A]/50 focus:outline-none transition-colors group"
          aria-label="Scroll to top"
        >
          {/* Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90">
            <circle
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx="24"
              cy="24"
            />
            <circle
              fill="transparent"
              stroke="#C8A96A"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx="24"
              cy="24"
              className="transition-all duration-75"
            />
          </svg>

          {/* Icon */}
          <ArrowUp className="w-5 h-5 text-white group-hover:text-[#C8A96A] transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
