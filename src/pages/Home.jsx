import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
        >
          Welcome to <span className="text-primary-600">Amigos</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-600 dark:text-gray-300"
        >
          Your complete SaaS solution for business growth
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/features"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:text-lg"
          >
            Get Started
            <FiArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-20 grid gap-8 md:grid-cols-3"
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Easy Integration
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Connect with your favorite tools seamlessly
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Powerful Analytics
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Make data-driven decisions with real-time insights
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            24/7 Support
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Get help when you need it, around the clock
          </p>
        </div>
      </motion.div>
    </div>
  );
}