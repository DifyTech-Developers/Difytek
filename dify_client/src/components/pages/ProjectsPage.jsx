import { motion } from 'framer-motion';
import ProjectsSection from '../sections/ProjectsSection';
import TestimonialsSection from '../sections/TestimonialsSection';

const ProjectsPage = () => {
  return (
    <motion.main
      className="relative pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ProjectsSection />
      <TestimonialsSection />
    </motion.main>
  );
};

export default ProjectsPage;
