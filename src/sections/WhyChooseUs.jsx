import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, Clock, Gem, Heart } from 'lucide-react';
import { whyChooseUs } from '../data/siteData';

// Map icon string names to Lucide icon components
const iconMap = {
  ShieldAlert: ShieldCheck,
  BadgeCheck: Award,
  Leaf: Leaf,
  Timer: Clock,
  Gem: Gem,
  Heart: Heart
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-white/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Uncompromising Excellence
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Why Discerning Owners Choose Us
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            We merge advanced chemical engineering with artisan craftsmanship to preserve your vehicle's value and visual glory.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col items-start text-left border border-white/5 relative group"
              >
                {/* Icon Container with glowing gold background on hover */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-[#0B0B0B] group-hover:border-[#C8A96A] transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-white mb-3 tracking-wide">
                  {item.title}
                </h3>
                
                <p className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
                  {item.description}
                </p>

                {/* Subtle bottom decorative gold line */}
                <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96A]/0 to-transparent group-hover:via-[#C8A96A]/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
