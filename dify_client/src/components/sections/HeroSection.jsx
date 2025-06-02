import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const techStack = [
  { name: 'MongoDB', icon: '/tech/mongodb.svg' },
  { name: 'Express', icon: '/tech/express.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' }
];

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Support Available' }
];

const FloatingCube = () => (
  <motion.div
    animate={{
      rotateX: [0, 360],
      rotateY: [0, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
    className="w-40 h-40 relative preserve-3d"
    style={{ perspective: "1000px" }}
  >
    {/* Front face with logo */}
    <div
      className="absolute w-full h-full border-2 border-[var(--color-space-neon)] bg-[var(--color-space-neon)]/5 backdrop-blur-sm flex items-center justify-center"
      style={{
        transform: 'translateZ(80px)',
        backfaceVisibility: 'hidden',
      }}
    >
      <img src="/Logo.png" alt="DifyTek Logo" className="w-3/4 h-3/4 object-contain" />
    </div>

    {/* Other cube faces */}
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="absolute w-full h-full border-2 border-[var(--color-space-neon)] bg-[var(--color-space-neon)]/5 backdrop-blur-sm"
        style={{
          transform: `rotateY(${(index + 1) * 90}deg) translateZ(80px)${index > 2 ? ' rotateX(90deg)' : ''}`,
          backfaceVisibility: 'hidden',
        }}
      />
    ))}
  </motion.div>
);

const HeroSection = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 md:px-12 py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 border-2 border-[var(--color-space-neon)] rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-[100px] border-2 border-purple-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-[200px] border-2 border-[var(--color-space-neon)] rounded-full animate-[spin_25s_linear_infinite]"></div>
        </div>
      </div>

      <div className="container mx-auto text-center z-10">
        {/* Floating Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-20 left-0 right-0 flex justify-center gap-8 overflow-hidden"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain filter brightness-150 hover:brightness-200 transition-all duration-300"
              />
              <span className="text-sm mt-2 text-space-text-secondary">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center mt-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-[var(--color-space-neon)] font-semibold">
              WELCOME TO DIFYTEK
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-glow leading-tight">
              Innovating the Future
              <br />
              <span className="bg-gradient-to-r from-[var(--color-space-neon)] to-purple-500 text-transparent bg-clip-text">
                of Technology
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-space-text-secondary text-lg md:text-xl max-w-xl">
              We create cutting-edge software solutions that transform businesses
              and drive digital innovation forward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={onContactClick}
                className="px-8 py-4 text-lg font-semibold text-black bg-[var(--color-space-neon)] rounded-lg 
                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
              >
                Start Your Journey
              </button>
              <a
                href="#projects"
                className="px-8 py-4 text-lg font-semibold text-glow border-2 border-[var(--color-space-neon)] rounded-lg 
                  transition-all duration-300 hover:bg-[var(--color-space-neon)]/10"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Center - 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <FloatingCube />
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg bg-[var(--color-space-black)]/40 backdrop-blur-sm border border-[var(--color-space-neon)]/20
                  hover:border-[var(--color-space-neon)]/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[var(--color-space-neon)] mb-2">
                  {stat.value}
                </div>
                <div className="text-space-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-space-black)] to-transparent z-10" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#8e44ad]/30 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[var(--color-space-neon)]/30 rounded-full filter blur-[100px]" />

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[var(--color-space-neon)] rounded-full p-1">
          <div className="w-2 h-2 bg-[var(--color-space-neon)] rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
