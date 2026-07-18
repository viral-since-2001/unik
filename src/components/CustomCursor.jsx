import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing effect
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor if fine pointer (desktop mouse) is available
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    if (mediaQuery.matches) {
      document.body.classList.add("custom-cursor-enabled");
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Dynamic hover detection for interactive elements
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const updateHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, select, input, textarea, [role="button"], .interactive'
      );
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    updateHoverListeners();

    // Observe DOM changes to attach hovers to dynamic elements
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Smooth Trailing Outer Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.6 : 1,
          borderColor: hovered ? "#D6B87C" : "#C8A96A",
          backgroundColor: hovered ? "rgba(200, 169, 106, 0.08)" : "rgba(200, 169, 106, 0)",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C8A96A] pointer-events-none z-[9999] transition-colors duration-300"
      />
      {/* Direct Inner Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.3 : 1,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-[#C8A96A] rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
}
