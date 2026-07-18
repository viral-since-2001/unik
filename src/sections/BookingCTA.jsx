import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.jpg';
import { bookingCtaContent, contactInfo } from '../data/siteData';

export default function BookingCTA() {
  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodeURIComponent(contactInfo.whatsappMsg)}`;

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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent pointer-events-none" />

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
            {bookingCtaContent.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 whitespace-pre-line"
        >
          {bookingCtaContent.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-sm sm:text-base text-[#B8B8B8] font-light max-w-xl leading-relaxed tracking-wide mb-10"
        >
          {bookingCtaContent.description}
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
            <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.709 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
            </svg>
            <span>WhatsApp Chat</span>
          </a>

          {/* Call Now button */}
          <a
            href={`tel:${contactInfo.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-inter font-semibold text-xs tracking-widest uppercase px-8 py-4.5 rounded-full transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#C8A96A]" />
            <span>Call {contactInfo.phone}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
