import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import beforeDirty from '../assets/images/before_dirty.jpg';
import afterClean from '../assets/images/after_clean.jpg';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Track container width dynamically to prevent image compression
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    
    // Set initial size
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
    
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section id="before-after" className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-10 w-[30vw] h-[30vw] rounded-full bg-[#C8A96A]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-inter text-xs tracking-[4px] text-[#C8A96A] uppercase font-semibold">
            Visual Proof
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
            Precision Paint Correction
          </h2>
          <p className="font-inter text-sm text-[#B8B8B8] font-light leading-relaxed tracking-wide">
            Slide the handle to witness how our paint correction process eliminates micro-scratches, swirl marks, and oxidation to achieve a true mirror finish.
          </p>
        </div>

        {/* Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none cursor-ew-resize"
        >
          {/* AFTER Image (Background) */}
          <img
            src={afterClean}
            alt="After paint correction"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute right-6 top-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] text-white tracking-[2px] uppercase z-20 font-semibold font-inter">
            After: Flawless Polish
          </div>

          {/* BEFORE Image (Foreground clipped) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeDirty}
              alt="Before paint correction"
              // Keep the image width fixed to container width so it doesn't compress
              className="absolute top-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerWidth }}
            />
            <div className="absolute left-6 top-6 bg-[#C8A96A] px-3.5 py-1.5 rounded-full text-[10px] text-[#0B0B0B] tracking-[2px] uppercase z-20 font-bold font-inter shadow-[0_4px_10px_rgba(200,169,106,0.3)]">
              Before: Swirl Marks
            </div>
          </div>

          {/* Drag Bar Divider line */}
          <div
            className="absolute inset-y-0 w-[2px] bg-[#C8A96A] z-20 shadow-[0_0_10px_rgba(200,169,106,0.5)] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Drag Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C8A96A] flex items-center justify-center text-[#0B0B0B] shadow-[0_0_20px_rgba(200,169,106,0.5)] border border-[#D6B87C] pointer-events-none">
              <ArrowLeftRight className="w-4 h-4 font-bold" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
