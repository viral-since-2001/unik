import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useCountUp from '../hooks/useCountUp';
import { statsHeader } from '../data/siteData';

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleObserver = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      }
    };

    const observer = new IntersectionObserver(handleObserver, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Custom count up timers fueled by dynamic site data configurations
  const years = useCountUp(statsHeader.yearsTarget, 1800, isVisible);
  const cars = useCountUp(statsHeader.carsTarget, 2000, isVisible);
  const customers = useCountUp(statsHeader.customersTarget, 2000, isVisible);
  const rating = useCountUp(statsHeader.ratingTarget, 1500, isVisible);

  const statsItems = [
    {
      id: "years",
      number: `${years}+`,
      label: statsHeader.yearsLabel,
      subText: statsHeader.yearsSub
    },
    {
      id: "cars",
      number: `${cars.toLocaleString()}+`,
      label: statsHeader.carsLabel,
      subText: statsHeader.carsSub
    },
    {
      id: "customers",
      number: `${customers.toLocaleString()}+`,
      label: statsHeader.customersLabel,
      subText: statsHeader.customersSub
    },
    {
      id: "rating",
      number: `${(rating / 10).toFixed(1)}/5`,
      label: statsHeader.ratingLabel,
      subText: statsHeader.ratingSub
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#151515] border-y border-white/5 overflow-hidden"
    >
      {/* Background soft reflections */}
      <div className="absolute top-1/2 left-1/4 w-[50vw] h-[50vw] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsItems.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Stat Number */}
              <span className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#C8A96A] tracking-tight text-glow-gold transition-transform group-hover:scale-105 duration-300">
                {stat.number}
              </span>
              
              {/* Label */}
              <span className="font-inter text-xs sm:text-sm font-semibold tracking-wider text-white uppercase mt-4">
                {stat.label}
              </span>
              
              {/* Subtitle */}
              <span className="font-inter text-[10px] sm:text-xs text-[#B8B8B8] font-light tracking-wide mt-1">
                {stat.subText}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
