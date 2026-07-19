import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle, ChevronDown } from 'lucide-react';
import { testimonials, testimonialsHeader, statsHeader } from '../data/siteData';

const INITIAL_VISIBLE = 6;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? testimonials : testimonials.slice(0, INITIAL_VISIBLE);
  const avgRating = (statsHeader.ratingTarget / 10).toFixed(1);

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background soft reflections */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] bg-[#C8A96A]/[0.025] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            {testimonialsHeader.subtitle}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            {testimonialsHeader.title}
          </h2>
        </div>

        {/* Aggregate Rating Summary Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16 py-6 px-8 rounded-2xl border border-[#C8A96A]/20 bg-[#C8A96A]/[0.04] max-w-2xl mx-auto text-center sm:text-left">
          <div className="flex items-baseline gap-1 shrink-0">
            <span className="font-playfair text-4xl sm:text-5xl font-bold text-[#C8A96A] text-glow-gold">
              {avgRating}
            </span>
            <span className="font-inter text-sm text-[#B8B8B8]">/5</span>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#C8A96A] fill-current" />
              ))}
            </div>
            <p className="font-inter text-xs sm:text-sm text-white font-medium">
              Based on {statsHeader.customersTarget}+ Verified Reviews
            </p>
            <p className="font-inter text-[10px] sm:text-xs text-[#B8B8B8] font-light mt-0.5">
              Collected from Google &amp; Justdial
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((t) => (
              <motion.div
                key={t.id}
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0 }}
                className="relative glass-card rounded-2xl p-6 border border-white/5 hover:border-[#C8A96A]/30 transition-colors duration-300 flex flex-col gap-4"
              >
                <Quote className="absolute right-5 top-5 w-8 h-8 text-white/[0.04] pointer-events-none" />

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#C8A96A] fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-inter text-sm text-[#E8E8E8] font-light leading-relaxed tracking-wide flex-grow">
                  "{t.review}"
                </p>

                {/* Customer Details */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-[#C8A96A]/30 flex items-center justify-center bg-white/5 font-playfair text-sm font-semibold text-[#C8A96A]">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-inter text-xs font-semibold text-white tracking-wide truncate">
                        {t.name}
                      </span>
                      <CheckCircle className="w-3 h-3 text-[#34D399] fill-current shrink-0" />
                    </div>
                    <span className="font-inter text-[11px] text-[#B8B8B8] font-light block truncate">
                      {t.vehicle}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Toggle */}
        {testimonials.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#C8A96A]/50 bg-white/[0.02] hover:bg-white/5 text-xs font-inter font-semibold tracking-widest uppercase text-[#C8A96A] transition-all duration-300"
            >
              <span>{showAll ? 'Show Fewer Reviews' : `Show All ${testimonials.length} Reviews`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
