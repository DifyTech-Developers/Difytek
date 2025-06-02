import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendEmail } from '../../server.api';
import toast from 'react-hot-toast';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData.name, formData.email, formData.message)
      .then(() => {
        toast.success(` ${formData.name},thank you for your message!`);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        toast.error(`${formData.name}, something went wrong. Please try again later.`);
      });
    // Close the modal after submission
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          as={motion.div}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="w-full max-w-md bg-space-black/90 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl shadow-space-neon/10"
        >
          <div className="relative">
            <Dialog.Title className="text-2xl font-bold text-space-text-primary mb-2">
              Let's Connect
            </Dialog.Title>
            <p className="text-space-text-secondary mb-6">
              Have a project in mind? We'd love to hear about it.
            </p>

            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-space-text-secondary hover:text-space-neon transition-colors cursor-pointer rounded-full p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-space-neon focus:ring-offset-2"
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-space-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Enter your name'
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                  text-space-text-primary focus:border-space-neon focus:ring-1 focus:ring-space-neon 
                  transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-space-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='Enter your email'
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                  text-space-text-primary focus:border-space-neon focus:ring-1 focus:ring-space-neon 
                  transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-space-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder='Enter your message'
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                  text-space-text-primary focus:border-space-neon focus:ring-1 focus:ring-space-neon 
                  transition-colors duration-300 resize-none"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-white hover:text-[#00ff9d] border-2 border-transparent hover:border-[#00ff9d] rounded-lg transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                Cancel
              </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-[#00ff9d] text-black font-bold rounded-lg hover:bg-[#00ff9d]/90 transition-all duration-300 shadow-lg shadow-[#00ff9d]/30 border-2 border-[#00ff9d] hover:shadow-xl cursor-pointer "
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ContactModal;
