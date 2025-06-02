import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-space-black pt-24 pb-12 px-4 md:px-12"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>

        <div className="space-y-8 text-space-text-secondary">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing our website and services, you agree to be bound by these Terms and Conditions.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access our services for personal, non-commercial use.
              This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              Our services are provided "as is". We make no warranties, expressed or implied, and hereby
              disclaim all warranties, including without limitation implied warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">4. Limitations</h2>
            <p className="mb-4">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-space-neon)] mb-4">5. Changes</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. Your continued use of
              our services following any changes constitutes acceptance of those changes.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsConditions;
