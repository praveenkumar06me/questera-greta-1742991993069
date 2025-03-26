import { motion } from 'framer-motion';
import { FiBox, FiPieChart, FiUsers, FiLock, FiGlobe, FiCpu } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: FiBox,
      title: 'Product Management',
      description: 'Efficiently manage your products and inventory with our intuitive tools.'
    },
    {
      icon: FiPieChart,
      title: 'Advanced Analytics',
      description: 'Get detailed insights and reports to make data-driven decisions.'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team members in real-time.'
    },
    {
      icon: FiLock,
      title: 'Enterprise Security',
      description: 'Keep your data safe with our enterprise-grade security features.'
    },
    {
      icon: FiGlobe,
      title: 'Global Scale',
      description: 'Scale your business globally with our distributed infrastructure.'
    },
    {
      icon: FiCpu,
      title: 'API Integration',
      description: 'Connect with other services using our robust API system.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
        >
          Features that empower your business
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-600 dark:text-gray-300"
        >
          Everything you need to scale your business effectively
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg w-fit">
              <feature.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}