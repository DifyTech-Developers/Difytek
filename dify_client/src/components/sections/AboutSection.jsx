import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Client Satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-12 bg-space-black/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-space-text-primary">
              Pushing the Boundaries <br />
              of What's Possible
            </h2>

            <p className="text-space-text-secondary mb-8">
              At DifyTek, we're more than just a software company. We're innovators,
              problem-solvers, and visionaries who are passionate about creating
              technology that makes a difference. Our team of expert developers and
              designers work tirelessly to bring revolutionary solutions to life.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-space-neon text-2xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-space-text-secondary text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 grid grid-cols-2 gap-4"
          >            <div className="space-y-4">
              <div className="h-48 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="/about us/about2.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="/about us/about1.jpg"
                  alt="Modern workspace"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="/about us/about3.jpg"
                  alt="Technology innovation"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-lg backdrop-blur-sm border border-white/10">
                <img
                  src="/about us/about4.jpg"
                  alt="Development process"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
