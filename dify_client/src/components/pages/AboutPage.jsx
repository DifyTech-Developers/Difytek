import { motion } from 'framer-motion';
import AboutSection from '../sections/AboutSection';
import WorkflowSection from '../sections/WorkflowSection';

const AboutPage = () => {
  return (
    <motion.main
      className="relative pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutSection />
      <WorkflowSection />
    </motion.main>
  );
};

export default AboutPage;
