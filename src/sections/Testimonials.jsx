import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background soft reflections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-white/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Client Endorsements
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
            Words From Our Patrons
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[350px] flex flex-col justify-between">
          {/* Quote icon watermark */}
          <Quote className="absolute right-8 top-8 w-24 h-24 text-white/[0.02] pointer-events-none" />

          {/* Animated Slide Content */}
          <div className="overflow-hidden relative flex-grow flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full flex flex-col gap-6"
              >
                {/* Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(activeTestimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C8A96A] fill-current text-glow-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-playfair text-lg sm:text-xl md:text-2xl italic font-light text-white leading-relaxed tracking-wide">
                  "{activeTestimonial.review}"
                </p>

                {/* Customer Details */}
                <div className="flex items-center gap-4 mt-4">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full border border-[#C8A96A]/30 flex items-center justify-center bg-white/5 font-playfair font-semibold text-[#C8A96A]">
                    {activeTestimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-inter text-sm font-semibold text-white tracking-wide">
                        {activeTestimonial.name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#34D399] fill-current" />
                      <span className="font-inter text-[9px] uppercase tracking-wider text-[#34D399]">
                        Verified
                      </span>
                    </div>
                    <span className="font-inter text-xs text-[#B8B8B8] font-light mt-0.5 block">
                      {activeTestimonial.vehicle}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-8">
            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-[#C8A96A]' : 'w-2 bg-white/10'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-[#C8A96A] transition-colors focus:outline-none"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C8A96A]/50 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-[#C8A96A] transition-colors focus:outline-none"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
