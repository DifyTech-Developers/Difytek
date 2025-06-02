import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => (<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--color-space-neon)]/30 transition-all duration-300"
  onClick={() => onClick(project)}
>  <div className="aspect-video w-full overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-space-text-primary mb-2 group-hover:text-space-neon">
      {project.title}
    </h3>
    <p className="text-space-text-secondary text-sm">
      {project.description}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 text-xs rounded-full bg-white/10 text-space-text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</motion.div>
);

const ProjectModal = ({ project, isOpen, onClose }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    className="relative z-50"
  >
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel className="w-full max-w-2xl bg-space-black/90 border border-white/10 rounded-2xl p-6 md:p-8">        <div className="aspect-video w-full rounded-lg mb-6 overflow-hidden">
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover"
        />
      </div>

        <Dialog.Title className="text-2xl font-bold text-space-text-primary mb-4">
          {project?.title}
        </Dialog.Title>

        <div className="prose prose-invert mb-6">
          <p className="text-space-text-secondary">
            {project?.fullDescription}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-space-neon border border-space-neon rounded-lg hover:bg-space-neon/10 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </Dialog.Panel>
    </div>
  </Dialog>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Campus Management System',
      description: 'A complete college administration platform.',
      fullDescription:
        'This MERN-based Campus Management System streamlines administrative tasks like student enrollment, attendance tracking, timetable scheduling, and internal communication. It includes separate dashboards for students, faculty, and administrators.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg',
    },
    {
      title: 'E-commerce Storefront',
      description: 'Full-featured online store with cart and payment integration.',
      fullDescription:
        'A scalable e-commerce platform built with the MERN stack. Features include user authentication, product management, cart functionality, order tracking, and secure Stripe payment integration.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe API'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    },
    {
      title: 'Employee Management System',
      description: 'Manage employee data, leaves, and performance.',
      fullDescription:
        'A centralized system to manage employee details, leave applications, performance metrics, and payroll. It offers secure role-based access and real-time updates for HR managers and employees.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    },
    {
      title: 'Inventory Tracker',
      description: 'Real-time inventory management system.',
      fullDescription:
        'This application enables small to mid-size businesses to track inventory levels, manage supplier information, receive stock alerts, and generate reports. The dashboard offers real-time updates and analytics.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
    },
    {
      title: 'Online Learning Portal',
      description: 'Virtual learning platform with quizzes and assignments.',
      fullDescription:
        'A full-stack educational portal allowing users to enroll in courses, take quizzes, submit assignments, and interact in forums. Includes admin panel for instructors to manage content and assessments.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    },
  ];


  return (
    <section id="projects" className="py-24 px-4 md:px-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-space-text-primary mb-4">
            Our Latest Projects
          </h2>
          <p className="text-space-text-secondary max-w-2xl mx-auto">
            Explore our most recent innovations and technological breakthroughs
            that are reshaping industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={setSelectedProject}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
