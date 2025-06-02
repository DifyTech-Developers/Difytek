import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-space-black pt-24 pb-12 px-4 md:px-12"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-space-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including but not limited to name,
              email address, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Protect against fraud and unauthorized access</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">3. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">4. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to our use of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">5. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              privacy@difytek.com
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
