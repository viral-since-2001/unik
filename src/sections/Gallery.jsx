import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { galleryItems } from '../data/siteData';

const categories = ['all', 'ceramic', 'ppf', 'suv', 'sedan', 'luxury'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Brand Portfolio
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Elite Showroom Gallery
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            Filter through our visual catalog of corrected and protected supercars, luxury sedans, and performance SUVs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-inter text-xs tracking-wider uppercase font-semibold transition-all duration-300 focus:outline-none border ${
                filter === cat
                  ? 'bg-[#C8A96A] text-[#0B0B0B] border-[#C8A96A] shadow-[0_4px_15px_rgba(200,169,106,0.25)]'
                  : 'text-[#B8B8B8] hover:text-white border-white/5 bg-white/[0.01] hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance] w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/5 group cursor-pointer shadow-[0_10px_20px_rgba(0,0,0,0.3)] bg-white/[0.01]"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B0B0B]/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 select-none">
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Search className="w-4 h-4 text-[#C8A96A]" />
                  </div>
                  <span className="font-inter text-[9px] uppercase tracking-[3px] text-[#C8A96A] mb-1 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-playfair text-lg font-semibold text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image Container */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 250 }}
                className="relative max-w-5xl max-h-[85vh] rounded-xl overflow-hidden border border-white/10 bg-[#0B0B0B]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                {/* Details Footer */}
                <div className="p-5 bg-[#0B0B0B]/90 border-t border-white/5 backdrop-blur-md">
                  <span className="font-inter text-[9px] uppercase tracking-[3px] text-[#C8A96A] font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-white tracking-wide mt-1">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
