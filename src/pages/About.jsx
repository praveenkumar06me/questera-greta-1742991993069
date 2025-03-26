import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiUsers } from 'react-icons/fi';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          About Amigos
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Building the future of business software
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=RB"
                alt="Robert"
                className="h-16 w-16 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Robert
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Founder & CEO
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Robert founded Amigos with a vision to revolutionize how businesses operate in the digital age. 
              With over 15 years of experience in software development and business operations, 
              he leads the company's mission to provide innovative solutions that help businesses thrive.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg w-fit">
              <FiTarget className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              To empower businesses with innovative software solutions that drive growth and success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg w-fit">
              <FiAward className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              Our Values
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Innovation, integrity, and customer success drive everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg w-fit">
              <FiUsers className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              Our Team
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              A diverse group of experts committed to delivering excellence.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}