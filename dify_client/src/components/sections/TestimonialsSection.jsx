import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "DifyTek transformed our business operations with their innovative solutions. The team's expertise and dedication to excellence are unmatched.",
  },
  {
    name: "Michael Chang",
    role: "Founder, InnovateLabs",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Working with DifyTek was a game-changer for us. Their AI solutions helped us achieve 200% growth in just six months.",
  },
  {
    name: "Emma Thompson",
    role: "Director, FutureTech",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The level of professionalism and technical expertise at DifyTek is exceptional. They delivered beyond our expectations.",
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow mb-4">
            Client Success Stories
          </h2>
          <p className="text-[var(--color-text-primary)] opacity-80 max-w-2xl mx-auto">
            Discover how we've helped businesses transform and grow with our innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[var(--color-space-black)]/50 backdrop-blur-md border border-[var(--color-space-neon)]/10 rounded-xl p-6 hover:border-[var(--color-space-neon)]/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-[var(--color-space-neon)]"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-[var(--color-space-neon)]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm opacity-80">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-[var(--color-text-primary)] opacity-90 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}      <div className="absolute top-0 left-0 w-80 h-80 bg-[var(--color-space-neon)]/5 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-space-neon)]/5 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default TestimonialsSection;
