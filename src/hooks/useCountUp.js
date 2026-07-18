import { useState, useEffect } from 'react';

/**
 * Custom hook to count up to a target number using requestAnimationFrame.
 * @param {number} target - The number to count up to.
 * @param {number} duration - Animation duration in milliseconds.
 * @param {boolean} trigger - Starts the counting animation when true.
 */
export default function useCountUp(target, duration = 1500, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * (target - startValue) + startValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [target, duration, trigger]);

  return count;
}
