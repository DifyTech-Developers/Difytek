import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => (<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[var(--color-space-neon)]/30 transition-all duration-300"
>
  <div className="aspect-video w-full overflow-hidden">
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
    <p className="text-space-text-secondary text-sm mb-4">
      {project.description}
    </p>
    <div className="flex gap-3">
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick(project);
        }}
        className="px-4 py-2 text-sm text-space-text-primary bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
      >
        View More
      </button>
      {project.websiteUrl && (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm text-space-neon border border-space-neon rounded-lg hover:bg-space-neon/10 transition-colors duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          View Website
        </a>
      )}
    </div>
  </div>
</motion.div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl bg-space-black/90 border border-white/10 rounded-2xl p-6 md:p-8">
          {/* Main Image with Navigation */}
          <div className="relative aspect-video w-full rounded-lg mb-6 overflow-hidden group">
            <img
              src={project?.images[currentImageIndex]}
              alt={`${project?.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
              {currentImageIndex + 1} / {project?.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {project?.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                  ? 'border-[var(--color-space-neon)] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img src={img} alt={`${project.title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <Dialog.Title className="text-2xl font-bold text-space-text-primary mb-4">
            {project?.title}
          </Dialog.Title>

          <div className="prose prose-invert mb-6">
            <p className="text-space-text-secondary">
              {project?.fullDescription}
            </p>
          </div>

          <div className="flex justify-end gap-4">
            {project?.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-space-neon border border-space-neon rounded-lg hover:bg-space-neon/10 transition-colors duration-300"
              >
                View Website
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2 text-space-text-primary bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerce Product Store',
      description: 'An online platform for browsing and purchasing a variety of products seamlessly.',
      fullDescription:
        'This eCommerce website offers a user-friendly interface for exploring, adding, and purchasing products. It features product listings, a shopping cart, responsive design, and smooth navigation to enhance the user shopping experience.',
      image: '/projects/tipsybomb-home.png',
      images: [
        '/projects/tipsybomb-home.png',
        '/projects/tipsybomb-prod.png',
        '/projects/tipsybomb-login.png',
      ],
      websiteUrl: 'https://tipsy-bomb.vercel.app/',
    },
    {
      title: 'Build Now, Pay Later Landing Page',
      description: 'A modern, conversion-focused landing page offering web development services with a flexible payment model.',
      fullDescription:
        'This sleek and responsive landing page is designed to capture leads for a “Build Now, Pay Later” web development offer. It highlights key benefits, includes strong CTAs, a contact form, and trust-building visuals to drive user engagement and conversions.',
      image: '/projects/landing-home.png',
      images: [
        '/projects/landing-home.png',
        '/projects/landing-prod.png',
        '/projects/landing-step.png',
      ],
      websiteUrl: 'https://melbournewebstudio.com.au/build-now-pay-later?ref=onepagelove',
    },
    {
      title: 'Devonshire Soho – Grill Room',
      description: 'A visually rich restaurant landing page showcasing the luxurious Grill Room experience.',
      fullDescription:
        'This elegant landing page highlights the Devonshire Soho Grill Room, combining high-quality imagery, refined typography, and smooth scrolling to reflect the premium dining experience. It includes reservation options, menu highlights, and immersive storytelling for visitors.',
      image: '/projects/res-home.png',
      images: [
        '/projects/res-home.png',
        '/projects/res1.png',
        '/projects/res2.png',
      ],
      websiteUrl: 'https://www.devonshiresoho.co.uk/?ref=onepagelove#grillroom',
    }


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
