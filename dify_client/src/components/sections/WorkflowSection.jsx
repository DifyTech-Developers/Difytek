import { motion } from 'framer-motion';

const steps = [
  {
    title: "Discovery",
    description: "We analyze your needs and create a comprehensive plan aligned with your goals.",
    icon: "🔍",
  },
  {
    title: "Design",
    description: "Our expert team designs innovative solutions using cutting-edge technologies.",
    icon: "✨",
  },
  {
    title: "Development",
    description: "We bring your vision to life with robust, scalable implementation.",
    icon: "⚡",
  },
  {
    title: "Deployment",
    description: "Seamless deployment with continuous support and optimization.",
    icon: "🚀",
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">
            Our Process
          </h2>
          <p className="text-[var(--color-text-primary)] opacity-80 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-space-neon)]/20 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-space-black)] border-2 border-[var(--color-space-neon)] 
                              flex items-center justify-center text-2xl mb-6 mx-auto relative z-10">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[var(--color-space-neon)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-primary)] opacity-80">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[var(--color-space-neon)]/5 rounded-lg -z-10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-space-neon)]/5 rounded-full filter blur-[100px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-space-neon)]/5 rounded-full filter blur-[100px] translate-x-1/2"></div>
    </section>
  );
};

export default WorkflowSection;
