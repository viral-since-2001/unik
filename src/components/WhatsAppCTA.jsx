import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppCTA() {
  const phoneNumber = "1234567890"; // Mock number
  const message = encodeURIComponent("Hi Unik Car Care, I'm interested in booking a luxury detailing package. Please share details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-6 bottom-24 md:bottom-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] focus:outline-none hover:bg-[#20ba56] transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

      {/* Modern Icon */}
      <MessageSquare className="w-5 h-5 fill-current" />
      
      {/* Premium Tooltip */}
      <div className="absolute left-14 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-left transition-all duration-300 pointer-events-none whitespace-nowrap bg-black/90 border border-white/10 px-3 py-1.5 rounded text-xs text-white tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
        Chat on WhatsApp
      </div>
    </motion.a>
  );
}
