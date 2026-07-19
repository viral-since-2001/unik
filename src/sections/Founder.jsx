import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { founderHeader, founderContent } from '../data/siteData';

export default function Founder() {
  return (
    <section id="founder" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#C8A96A]/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            {founderHeader.subtitle}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            {founderHeader.title}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl border border-white/5 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
        >
          {/* Monogram / Avatar */}
          <div className="md:col-span-4 flex flex-col items-center text-center gap-6">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#C8A96A]/30 flex items-center justify-center bg-white/5">
              <div className="absolute inset-0 rounded-full border border-[#C8A96A]/20 animate-pulse-slow" />
              <span className="font-playfair text-5xl sm:text-6xl font-bold text-[#C8A96A] text-glow-gold">
                {founderContent.initials}
              </span>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-white tracking-wide">
                {founderContent.name}
              </h3>
              <p className="font-inter text-xs tracking-[3px] text-[#C8A96A] uppercase mt-1">
                {founderContent.role}
              </p>
            </div>

            {/* Highlights */}
            <div className="flex items-center gap-6 pt-2 border-t border-white/5 w-full justify-center">
              {founderContent.highlights.map((h) => (
                <div key={h.label} className="text-center">
                  <p className="font-playfair text-lg font-bold text-white">{h.value}</p>
                  <p className="font-inter text-[9px] tracking-wider text-[#B8B8B8] uppercase mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bio & Quote */}
          <div className="md:col-span-8 flex flex-col gap-6">
            <p className="font-inter text-sm sm:text-base text-[#B8B8B8] font-light leading-relaxed tracking-wide">
              {founderContent.bio}
            </p>

            <div className="relative bg-white/[0.03] border border-white/5 rounded-xl p-6 pl-12">
              <Quote className="w-6 h-6 text-[#C8A96A]/40 absolute top-5 left-4" />
              <p className="font-playfair text-base sm:text-lg text-white italic leading-relaxed">
                "{founderContent.quote}"
              </p>
              <p className="font-inter text-xs text-[#C8A96A] tracking-wider uppercase mt-4">
                — {founderContent.name}, {founderContent.role}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
