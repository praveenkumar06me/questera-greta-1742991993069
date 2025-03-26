import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          We'd love to hear from you
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FiMail className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <a href="mailto:support@cloudsuite.com" className="ml-3 text-gray-600 dark:text-gray-300 hover:text-primary-600">
                support@cloudsuite.com
              </a>
            </div>
            <div className="flex items-center">
              <FiInstagram className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <a 
                href="https://instagram.com/cloudsuite_saas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-3 text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >
                @cloudsuite_saas
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}