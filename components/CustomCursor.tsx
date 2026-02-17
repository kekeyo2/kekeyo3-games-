
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const secondaryCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (secondaryCursorRef.current) {
        // Delayed follow effect for the ring
        secondaryCursorRef.current.animate(
          { transform: `translate3d(${clientX}px, ${clientY}px, 0)` },
          { duration: 400, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      {/* Sharp Dot Cursor */}
      <div
        ref={mainCursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"
      />
      {/* Minimalist Ring */}
      <div
        ref={secondaryCursorRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
