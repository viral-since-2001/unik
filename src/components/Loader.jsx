import { motion } from 'framer-motion';

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Gold Crest / Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center w-24 h-24 mb-6 rounded-full border border-luxury-gold/20"
        >
          <div className="absolute inset-0 rounded-full border border-luxury-gold/40 animate-pulse-slow"></div>
          {/* Custom Luxury U Monogram */}
          <span className="font-playfair text-4xl font-bold tracking-widest text-[#C8A96A] text-glow-gold">
            U
          </span>
        </motion.div>

        {/* Brand Name Text Animation */}
        <motion.h1
          initial={{ letterSpacing: "15px", opacity: 0 }}
          animate={{ letterSpacing: "6px", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="font-playfair text-3xl md:text-4xl font-bold tracking-[8px] text-white text-center uppercase"
        >
          UNIK
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase mt-2"
        >
          CAR CARE & SPA
        </motion.p>

        {/* Loading Progress Bar */}
        <div className="w-40 h-[1px] bg-white/10 mt-8 overflow-hidden rounded">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="relative w-full h-full bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
