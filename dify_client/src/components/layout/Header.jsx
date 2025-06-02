import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = ({ onContactClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Handle scroll and close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', onClick: onContactClick, isSpecial: true },
  ];

  const handleNavigation = (e, item) => {
    e.preventDefault();

    // First close the mobile menu
    setIsOpen(false);

    // Then handle the navigation after a short delay
    setTimeout(() => {
      if (item.onClick) {
        item.onClick();
      } else if (item.href && item.href.startsWith('#')) {
        const element = document.querySelector(item.href);
        if (element) {
          if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              window.history.pushState(null, '', item.href);
            }, 100);
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', item.href);
          }
        }
      }
    }, 300);
  };

  const isActive = (section) => {
    return activeSection === section;
  };

  const WhatsAppLink = () => (
    <motion.a
      href="https://wa.me/919301579493?text=Hello%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20software%20services."
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-[#00ff9d] hover:text-glow transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0c3.2.003 6.207 1.248 8.47 3.512 2.262 2.264 3.506 5.271 3.504 8.472-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </motion.a>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#home"
              onClick={(e) => handleNavigation(e, { href: '#home' })}
              className="flex items-center gap-2"
            >
              <img
                src="/Logo.png"
                alt="DifyTek Logo"
                className="h-10 w-auto filter brightness-200 hover:brightness-150 transition-all duration-300"
              />
              <span className="text-[var(--color-space-neon)] text-2xl font-bold tracking-wider hover:text-glow transition-all duration-300">
                DifyTek
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  whileHover={item.isSpecial ? { scale: 1.05 } : { scale: 1.1 }}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${item.isSpecial
                    ? 'bg-[#00ff9d] text-black hover:bg-[#00ff9d]/90 font-bold shadow-lg shadow-[#00ff9d]/30 border-2 border-[#00ff9d] hover:shadow-xl'
                    : item.section && isActive(item.section)
                      ? 'text-[#00ff9d] font-semibold border-b-2 border-[#00ff9d]'
                      : 'text-white hover:text-[#00ff9d] hover:border-b-2 hover:border-[#00ff9d]'
                    }`}
                >
                  {item.name}
                  {!item.isSpecial && item.section && isActive(item.section) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 -z-10 bg-[var(--color-space-neon)]/10 rounded-lg"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
              {/* WhatsApp icon after Contact button */}
              <WhatsAppLink />
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item)}
                      whileHover={{ x: 10 }}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${item.isSpecial
                        ? 'bg-[#00ff9d] text-black hover:bg-[#00ff9d]/90 font-bold shadow-lg shadow-[#00ff9d]/30 border-2 border-[#00ff9d] my-2'
                        : item.section && isActive(item.section)
                          ? 'text-[#00ff9d] font-semibold border-l-4 border-[#00ff9d] bg-[#00ff9d]/10'
                          : 'text-white hover:text-[#00ff9d] hover:border-l-4 hover:border-[#00ff9d] hover:bg-[#00ff9d]/5'
                        }`}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  {/* WhatsApp link in mobile menu */}
                  <div className="px-4 py-2">
                    <WhatsAppLink />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
