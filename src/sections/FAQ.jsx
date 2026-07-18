import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs, faqHeader } from '../data/siteData';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-[#151515] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30vw] h-[30vw] rounded-full bg-[#C8A96A]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            {faqHeader.subtitle}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            {faqHeader.title}
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            {faqHeader.description}
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#C8A96A]/40 bg-white/[0.03]' : 'border-white/5 hover:border-white/10'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-0 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-playfair text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-[#C8A96A] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-[#C8A96A]/50 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-[#C8A96A] text-[#0B0B0B] border-[#C8A96A]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
