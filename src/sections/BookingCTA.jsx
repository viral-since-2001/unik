import { motion } from 'framer-motion';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.jpg';

export default function BookingCTA() {
  const phoneNumber = "1234567890";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20luxury%20car%20spa%20appointment.`;

  return (
    <section className="relative py-28 w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Cinematic vignette */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 40%',
        }}
      />
      <div className="absolute inset-0 bg-[#0B0B0B]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B] pointer-events-none" />

      {/* Decorative Gold Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-[#C8A96A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-[#C8A96A]/30 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="font-inter text-[9px] uppercase tracking-[3px] text-[#C8A96A] font-semibold">
            Limited Availabilities This Week
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
        >
          Ready to Make Your Car <br/>
          <span className="text-[#C8A96A] text-glow-gold">Shine Like New Again?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-sm sm:text-base text-[#B8B8B8] font-light max-w-xl leading-relaxed tracking-wide mb-10"
        >
          Experience standard-setting automotive detailing. Schedule your appointment today and give your vehicle the care it deserves.
        </motion.p>

        {/* Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Primary booking button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C8A96A] hover:bg-[#D6B87C] text-[#0B0B0B] font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(200,169,106,0.15)] hover:shadow-[0_15px_30px_rgba(200,169,106,0.3)] hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#25D366]/50 bg-white/5 hover:bg-[#25D366]/10 text-white font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Chat</span>
          </a>

          {/* Call Now button */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#C8A96A]" />
            <span>Call {phoneNumber}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
