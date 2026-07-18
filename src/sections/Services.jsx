import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#151515] overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
              Bespoke Detailing Services
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
              Unrivaled Care For All Surfaces
            </h2>
          </div>
          <p className="font-inter text-sm text-[#B8B8B8] font-light max-w-md text-left lg:text-right leading-relaxed tracking-wide">
            Explore our curated menu of detailing, correction, and surface protection therapies, engineered to produce a concour-level presentation.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 group hover:border-[#C8A96A]/30 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Image Section with Zoom Effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-95" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white tracking-wide mb-3 group-hover:text-[#C8A96A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Metadata & CTA */}
                <div>
                  <div className="flex items-center justify-between text-xs text-[#B8B8B8] font-light border-t border-white/5 pt-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C8A96A]" />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-white">
                      <Tag className="w-3.5 h-3.5 text-[#C8A96A]" />
                      <span>Est. ${service.price}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96A] hover:text-[#D6B87C] uppercase group/link"
                  >
                    <span>Request Booking</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
