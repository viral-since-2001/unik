import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown, Calendar, Compass } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.jpg';
import { heroContent } from '../data/siteData';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax Offset */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${offsetY * 0.4}px) scale(1.05)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Premium Cinematic Overlays */}
      <div className="absolute inset-0 bg-[#0B0B0B]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
      
      {/* Radial Gold Lighting Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-[#C8A96A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-white/2 blur-[150px] pointer-events-none" />

      {/* Floating Animated Fog/Smoke Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <motion.div
          animate={{
            x: ['-50%', '50%'],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 left-1/2 w-[200%] h-60 bg-gradient-to-t from-white/5 to-transparent blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: ['50%', '-50%'],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 left-1/2 w-[200%] h-80 bg-gradient-to-t from-[#C8A96A]/5 to-transparent blur-3xl opacity-15"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">
        
        {/* Main Typography & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 border border-[#C8A96A]/30 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-pulse"></span>
            <span className="font-inter text-[10px] tracking-[3px] text-[#C8A96A] uppercase font-semibold">
              {heroContent.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 whitespace-pre-line"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[#B8B8B8] text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed tracking-wide mb-10"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(200,169,106,0.15)] hover:shadow-[0_15px_30px_rgba(200,169,106,0.3)] hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>{heroContent.primaryBtnText}</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 text-white font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              <span>{heroContent.secondaryBtnText}</span>
            </a>
          </motion.div>
        </div>

        {/* Floating Glass Stats Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm glass-card p-6 sm:p-8 rounded-2xl relative border border-white/5 overflow-hidden flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Soft inner gold reflection */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8A96A]/10 blur-2xl rounded-full" />
            
            {/* Top Stars & Rating */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C8A96A] fill-current text-glow-gold" />
                ))}
              </div>
              <p className="font-playfair text-xl font-semibold text-white mt-1">
                {heroContent.ratingTitle}
              </p>
              <p className="font-inter text-xs text-[#B8B8B8] tracking-wide font-light">
                {heroContent.ratingSubtitle}
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Core Stats Bulletins */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-semibold text-[#C8A96A]">{heroContent.stats.leftNumber}</span>
                <span className="font-inter text-[10px] uppercase tracking-wider text-[#B8B8B8] mt-0.5">{heroContent.stats.leftLabel}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-semibold text-[#C8A96A]">{heroContent.stats.rightNumber}</span>
                <span className="font-inter text-[10px] uppercase tracking-wider text-[#B8B8B8] mt-0.5">{heroContent.stats.rightLabel}</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => {
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-inter text-[9px] uppercase tracking-[4px] text-[#B8B8B8] font-light">
          {heroContent.scrollDownText}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#C8A96A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
