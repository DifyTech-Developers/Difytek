import { memo, useMemo } from 'react';
import '../sections/stars.css'
const StarBackground = memo(() => {
  // Generate stars only once using useMemo
  const stars = useMemo(() => {
    const generateStars = (count, sizeRange, prefix) => {
      return Array.from({ length: count }, (_, i) => ({
        id: `${prefix}-${i}`,
        style: {
          '--x': Math.random() * 100,
          '--y': Math.random() * 100,
          '--d': Math.random() * 4,
          '--s': sizeRange.min + Math.random() * (sizeRange.max - sizeRange.min)
        }
      }));
    };

    return {
      small: generateStars(30, { min: 1, max: 2 }, 'small'),
      medium: generateStars(15, { min: 2, max: 3 }, 'medium'),
      large: generateStars(5, { min: 3, max: 4 }, 'large')
    };
  }, []); // Empty dependency array means this runs only once

  const shootingStars = useMemo(() =>
    Array.from({ length: 2 }, (_, i) => ({
      id: `shooting-${i}`,
      style: {
        '--shoot-delay': `${i * 8}s`,
        '--shoot-x': `${Math.random() * 100}`,
        '--shoot-y': `${Math.random() * 30}`
      }
    })), []
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {/* Optimized star containers */}
        <div className="stars-layer">
          {stars.small.map(star => (
            <div
              key={star.id}
              className="star star-small"
              style={{
                '--left': `${star.style['--x']}%`,
                '--top': `${star.style['--y']}%`,
                '--delay': `${star.style['--d']}s`,
                '--size': `${star.style['--s']}px`
              }}
            />
          ))}
        </div>

        <div className="stars-layer">
          {stars.medium.map(star => (
            <div
              key={star.id}
              className="star star-medium"
              style={{
                '--left': `${star.style['--x']}%`,
                '--top': `${star.style['--y']}%`,
                '--delay': `${star.style['--d']}s`,
                '--size': `${star.style['--s']}px`
              }}
            />
          ))}
        </div>

        <div className="stars-layer">
          {stars.large.map(star => (
            <div
              key={star.id}
              className="star star-large"
              style={{
                '--left': `${star.style['--x']}%`,
                '--top': `${star.style['--y']}%`,
                '--delay': `${star.style['--d']}s`,
                '--size': `${star.style['--s']}px`
              }}
            />
          ))}
        </div>

        {/* Optimized shooting stars */}
        <div className="shooting-stars-container">
          {shootingStars.map(star => (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                '--delay': star.style['--shoot-delay'],
                '--x': `${star.style['--shoot-x']}%`,
                '--y': `${star.style['--shoot-y']}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-space-black)]/30 to-[var(--color-space-black)] opacity-90" />
    </div>
  );
});

StarBackground.displayName = 'StarBackground';
export default StarBackground;
