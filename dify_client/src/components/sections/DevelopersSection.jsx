import { motion } from 'framer-motion';

const developers = [
  {
    name: 'Ankush Kumar Gupta',
    role: 'CEO & Full Stack (MERN) Developer',
    image: 'team/CEO.png',
    about: 'Visionary leader with expertise in MERN stack development and cloud architecture. Leading innovation in software solutions.',
    skills: ['React', 'Node.js', 'MongoDB', 'express', 'Gen AI'],
    social: {
      linkedin: 'https://www.linkedin.com/in/ankush-kumar-gupta-88b383305/',
      github: 'https://github.com/ankush-coder-497001',
    }
  },
  {
    name: 'Developer 1',
    role: 'Senior Frontend Developer',
    image: '/team/dev1.jpg',
    about: 'Expert in creating responsive and interactive web applications using modern frontend technologies.',
    skills: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
  {
    name: 'Developer 2',
    role: 'Backend Developer',
    image: '/team/dev2.jpg',
    about: 'Specialized in building scalable backend systems and API development.',
    skills: ['Node.js', 'Express', 'MongoDB', 'AWS'],
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
  {
    name: 'Developer 3',
    role: 'Full Stack Developer',
    image: '/team/dev3.jpg',
    about: 'Passionate about creating end-to-end solutions and cloud architecture.',
    skills: ['React', 'Node.js', 'AWS', 'Docker'],
    social: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    }
  },
];

const DevelopersSection = () => {
  return (
    <section id="team" className="py-24 px-4 md:px-12 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-space-text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-space-text-secondary max-w-2xl mx-auto">
            Our talented developers bring innovation and expertise to every project.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-xl aspect-square">
                  <img
                    src={developers[0].image}
                    alt={developers[0].name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a
                      href={developers[0].social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00ff9d] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={developers[0].social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00ff9d] transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{developers[0].name}</h3>
                <p className="text-[#00ff9d] font-semibold mb-4">{developers[0].role}</p>
                <p className="text-space-text-secondary mb-6">{developers[0].about}</p>
                <div className="flex flex-wrap gap-2">
                  {developers[0].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Developers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.slice(1).map((developer, index) => (
            <motion.div
              key={developer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="relative group mb-4">
                <div className="overflow-hidden rounded-lg aspect-square">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a
                      href={developer.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00ff9d] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={developer.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00ff9d] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{developer.name}</h3>
              <p className="text-[#00ff9d] font-semibold mb-3">{developer.role}</p>
              <p className="text-space-text-secondary text-sm mb-4">{developer.about}</p>
              <div className="flex flex-wrap gap-2">
                {developer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
