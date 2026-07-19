import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { pricingPackages, pricingHeader } from '../data/siteData';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Pricing() {
  return (
    <section id="packages" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#C8A96A]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            {pricingHeader.subtitle}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            {pricingHeader.title}
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            {pricingHeader.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`glass-card rounded-2xl p-8 border relative flex flex-col justify-between ${
                pkg.popular
                  ? 'border-[#C8A96A] lg:py-12 bg-white/[0.04] shadow-[0_25px_60px_rgba(0,0,0,0.7)] lg:-translate-y-4 z-10'
                  : 'border-white/5 bg-white/[0.01] shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-0'
              } group`}
            >
              {/* Popular Glow Effect */}
              {pkg.popular && (
                <div className="absolute inset-0 rounded-2xl bg-[#C8A96A]/2 blur-xl pointer-events-none group-hover:bg-[#C8A96A]/5 transition-all duration-500" />
              )}

              {/* Tag for popular package */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C8A96A] text-[#0B0B0B] text-[9px] font-inter font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full shadow-[0_4px_15px_rgba(200,169,106,0.3)] flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="font-inter text-xs text-[#B8B8B8] font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="font-inter text-2xl text-white font-light">₹</span>
                    <span className={`font-playfair text-5xl md:text-6xl font-bold tracking-tight ${
                      pkg.popular ? 'text-[#C8A96A] text-glow-gold' : 'text-white'
                    }`}>
                      {pkg.price}
                    </span>
                    <span className="font-inter text-xs text-[#B8B8B8] font-light ml-1">starting</span>
                  </div>
                </div>

                <hr className="border-white/5 mb-8" />

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-[#C8A96A]' : 'text-[#34D399]'
                      }`} />
                      <span className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book Button */}
              <div className="mt-4">
                <a
                  href="#contact"
                  className={`flex items-center justify-center w-full font-inter font-semibold text-xs tracking-widest uppercase py-4 rounded-full transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] shadow-[0_5px_15px_rgba(200,169,106,0.2)] hover:shadow-[0_8px_25px_rgba(200,169,106,0.4)]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  Book Package
                </a>
                <p className="font-inter text-[10px] text-[#B8B8B8] font-light text-center mt-3 tracking-wide">
                  Best for: {pkg.bestFor}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
