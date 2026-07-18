import { motion } from 'framer-motion';
import { processSteps } from '../data/siteData';

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-[#151515] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Chronological Workflow
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Our Precision Process
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            How we transform your vehicle from its current state to a perfect, sealed showroom finish.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Central Vertical Connector Line (Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-white/5 -translate-x-1/2" />
          
          {/* Animated Gold Scroll Overlay Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#C8A96A] via-[#C8A96A] to-transparent origin-top -translate-x-1/2"
          />

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-16"
          >
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  variants={stepVariants}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* central node dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#0B0B0B] border-2 border-[#C8A96A] -translate-x-1/2 top-1.5 z-20 shadow-[0_0_10px_rgba(200,169,106,0.5)]" />

                  {/* Left Column (or Right depending on even/odd) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 text-left md:text-right">
                    {/* Step Numeric Monogram */}
                    <div className={`flex items-baseline gap-2 mb-2 ${
                      isEven ? 'md:justify-start' : 'md:justify-end'
                    }`}>
                      {!isEven && (
                        <span className="font-playfair text-xl md:text-2xl font-bold text-[#C8A96A] text-glow-gold">
                          {step.step}
                        </span>
                      )}
                      <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white tracking-wide">
                        {step.title}
                      </h3>
                      {isEven && (
                        <span className="font-playfair text-xl md:text-2xl font-bold text-[#C8A96A] text-glow-gold">
                          {step.step}
                        </span>
                      )}
                    </div>

                    <p className={`font-inter text-xs sm:text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide ${
                      isEven ? 'md:text-left' : 'md:text-right'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Empty Spacer Column for Desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
