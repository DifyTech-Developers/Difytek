const StarBackground = () => {
  const generateStars = (count, sizeRange, color, prefix) => {
    return [...Array(count)].map((_, i) => ({
      id: `${prefix}-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      size: sizeRange.min + Math.random() * (sizeRange.max - sizeRange.min),
      opacity: 0.5 + Math.random() * 0.5
    }));
  };

  const smallStars = generateStars(150, { min: 1, max: 2 }, 'white', 'small');
  const mediumStars = generateStars(75, { min: 2, max: 3 }, '#00ffff', 'medium');
  const largeStars = generateStars(35, { min: 3, max: 4 }, '#9b59b6', 'large');

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Star layers */}
      <div className="absolute inset-0">
        {/* Small stars */}
        {smallStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
              boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}

        {/* Medium stars (cyan) */}
        {mediumStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-twinkle-slow"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
              backgroundColor: 'var(--color-space-neon)',
              boxShadow: '0 0 6px var(--color-space-neon)'
            }}
          />
        ))}

        {/* Large stars (purple) */}
        {largeStars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-[#9b59b6] animate-twinkle-slower"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
              boxShadow: '0 0 8px #9b59b6'
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute h-0.5 w-40 bg-gradient-to-r from-[var(--color-space-neon)] to-transparent 
                     animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              transform: 'rotate(-45deg)',
              animationDelay: `${i * 6}s`,
              boxShadow: '0 0 4px var(--color-space-neon)'
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-space-black)]/0 via-[var(--color-space-black)]/40 to-[var(--color-space-black)]" />
    </div>
  );
};

// Helper function to generate random star positions
function generateRandomPositions(count) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push(`${Math.random() * 100}% ${Math.random() * 100}%`);
  }
  return positions.join(',');
}


export default StarBackground;
