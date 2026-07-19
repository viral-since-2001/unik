import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';

export default function Loader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B]"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4"
        >
          <img src={logo} alt="Unik Car Care & Spa" className="h-20 md:h-24 w-auto object-contain" />
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="w-40 h-[1px] bg-white/10 mt-8 overflow-hidden rounded">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="relative w-full h-full bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
