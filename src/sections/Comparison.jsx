import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, HelpCircle, Star } from 'lucide-react';
import { comparisons } from '../data/siteData';

export default function Comparison() {
  const [activeTab, setActiveTab] = useState(comparisons[3].id); // Default to Ceramic Coating (Most Popular)

  const activePackage = comparisons.find((pkg) => pkg.id === activeTab);

  return (
    <section id="comparison" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] rounded-full bg-[#C8A96A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Service Matrix
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Compare detailing tiers
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            Select a service tier below to explore its duration, inclusions, warranties, and target outcomes.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/5 p-1.5 rounded-full border border-white/5 max-w-2xl mx-auto">
          {comparisons.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveTab(pkg.id)}
              className={`relative px-5 py-3 rounded-full font-inter text-xs tracking-wider uppercase font-semibold transition-all duration-300 focus:outline-none ${
                activeTab === pkg.id
                  ? 'text-[#0B0B0B]'
                  : 'text-[#B8B8B8] hover:text-white'
              }`}
            >
              {activeTab === pkg.id && (
                <motion.div
                  layoutId="activeComparisonTab"
                  className="absolute inset-0 bg-[#C8A96A] rounded-full shadow-[0_4px_15px_rgba(200,169,106,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {pkg.name}
                {pkg.popular && <Star className="w-3 h-3 fill-current mt-[-1px]" />}
              </span>
            </button>
          ))}
        </div>

        {/* Comparison Details Card */}
        <AnimatePresence mode="wait">
          {activePackage && (
            <motion.div
              key={activePackage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 relative"
            >
              {/* Highlight Tag */}
              {activePackage.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#C8A96A] text-[#0B0B0B] text-[9px] font-inter font-bold tracking-[2px] uppercase px-3 py-1 rounded">
                  RECOMMENDED TIER
                </div>
              )}

              {/* Left Column: Core Pricing & Recommendation */}
              <div className="md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-8">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                    {activePackage.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4 mb-2">
                    <span className="font-playfair text-5xl font-bold text-[#C8A96A] text-glow-gold">
                      ${activePackage.price}
                    </span>
                    <span className="font-inter text-xs text-[#B8B8B8] font-light">starting price</span>
                  </div>
                  <p className="font-inter text-xs text-[#B8B8B8] font-light tracking-wide mt-2">
                    Estimated Time: <strong className="text-white font-medium">{activePackage.duration}</strong>
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#C8A96A] shrink-0" />
                    <div>
                      <h4 className="font-inter text-xs font-semibold text-white tracking-wider uppercase">
                        Warranty Period
                      </h4>
                      <p className="font-inter text-xs text-[#B8B8B8] mt-0.5">{activePackage.warranty}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C8A96A] shrink-0" />
                    <div>
                      <h4 className="font-inter text-xs font-semibold text-white tracking-wider uppercase">
                        Best Suited For
                      </h4>
                      <p className="font-inter text-xs text-[#B8B8B8] mt-0.5">{activePackage.recommended}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Inclusions Checklists */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <h4 className="font-inter text-xs font-semibold text-[#C8A96A] tracking-[2px] uppercase mb-6">
                    What's Included
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activePackage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-white/5 hover:bg-[#C8A96A] text-white hover:text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full border border-white/10 hover:border-[#C8A96A] transition-all duration-300"
                  >
                    Select {activePackage.name}
                  </a>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
