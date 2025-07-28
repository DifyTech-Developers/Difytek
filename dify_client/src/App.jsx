import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import WorkflowSection from './components/sections/WorkflowSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import DevelopersSection from './components/sections/DevelopersSection';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';
import StarBackground from './components/ui/StarBackground';
import ContactModal from './components/ui/ContactModal';
import { Toaster } from 'react-hot-toast';

const HomePage = ({ isContactModalOpen, setIsContactModalOpen, activeSection }) => {
  return (
    <>
      <main className="relative smooth-transition">
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />

        <div className="section-fade" id="projects-section">
          <ProjectsSection />
        </div>


        <div className="section-fade" id="about-section">
          <AboutSection />
        </div>


        <div className="section-fade" id="testimonials-section">
          <TestimonialsSection />
        </div>
        <div className="section-fade" id="workflow-section">
          <WorkflowSection />
        </div>

      </main>

      <AnimatePresence>
        {isContactModalOpen && (
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const sections = document.querySelectorAll('section[id], .section-fade');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContactModalOpen(true);
    }, 5000); // Open after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <Toaster position="top-right" reverseOrder={false} />

      <Router>
        <div className="min-h-screen bg-space-black text-white relative overflow-x-hidden">
          <StarBackground />
          <Header
            onContactClick={() => setIsContactModalOpen(true)}
            activeSection={activeSection}
          />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  isContactModalOpen={isContactModalOpen}
                  setIsContactModalOpen={setIsContactModalOpen}
                  activeSection={activeSection}
                />
              }
            />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
