import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';
import { useSubscription } from '../contexts/SubscriptionContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const { plans, currentPlan, updateSubscription } = useSubscription();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubscribe = async (plan) => {
    if (!user) {
      navigate('/login');
      return;
    }

    const result = await updateSubscription(plan);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Select the perfect plan for your business needs
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
        {Object.values(plans).map((plan) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-lg shadow-lg divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 ${
              currentPlan?.id === plan.id ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {plan.id === 'free' ? 'Get started with basic features' : 
                 plan.id === 'pro' ? 'Perfect for growing businesses' :
                 'Custom solutions for large enterprises'}
              </p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </p>
              <button
                onClick={() => handleSubscribe(plan)}
                className={`mt-8 block w-full py-3 px-6 rounded-md text-center font-medium ${
                  currentPlan?.id === plan.id
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {currentPlan?.id === plan.id ? 'Current Plan' : 'Subscribe'}
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white tracking-wide uppercase">
                What's included
              </h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex space-x-3">
                    <FiCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-base text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}