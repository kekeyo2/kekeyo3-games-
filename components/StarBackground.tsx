
import React, { useMemo } from 'react';

const StarBackground: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5, // Smaller, sharper dots
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none z-[-1]">
      {/* Pure black background, no gradients */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite alternate`,
            animationDelay: `${star.delay}s`,
            boxShadow: star.size > 1.2 ? '0 0 2px rgba(255, 255, 255, 0.5)' : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
