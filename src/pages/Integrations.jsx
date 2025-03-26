import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGrid, 
  FiBox, 
  FiClock,
  FiCheck,
  FiX,
  FiAlertCircle,
  FiLink,
  FiSettings
} from 'react-icons/fi';

// Mock integrations data
const INTEGRATIONS = {
  payment: [
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Payment processing and billing management',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg',
      status: 'connected',
      category: 'payment'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Online payment solutions',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg',
      status: 'available',
      category: 'payment'
    }
  ],
  crm: [
    {
      id: 'salesforce',
      name: 'Salesforce',
      description: 'Customer relationship management',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/salesforce.svg',
      status: 'available',
      category: 'crm'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      description: 'Marketing, sales, and CRM platform',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg',
      status: 'connected',
      category: 'crm'
    }
  ],
  storage: [
    {
      id: 'dropbox',
      name: 'Dropbox',
      description: 'Cloud storage and file sharing',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dropbox.svg',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'gdrive',
      name: 'Google Drive',
      description: 'Cloud storage and collaboration',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googledrive.svg',
      status: 'connected',
      category: 'storage'
    }
  ],
  communication: [
    {
      id: 'slack',
      name: 'Slack',
      description: 'Team communication and notifications',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg',
      status: 'connected',
      category: 'communication'
    },
    {
      id: 'discord',
      name: 'Discord',
      description: 'Voice, video, and text communication',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg',
      status: 'available',
      category: 'communication'
    }
  ]
};

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const categories = [
    { id: 'all', name: 'All Integrations', icon: FiGrid },
    { id: 'payment', name: 'Payment', icon: FiBox },
    { id: 'crm', name: 'CRM', icon: FiBox },
    { id: 'storage', name: 'Storage', icon: FiBox },
    { id: 'communication', name: 'Communication', icon: FiBox }
  ];

  const getFilteredIntegrations = () => {
    let filtered = [];
    
    if (activeCategory === 'all') {
      filtered = Object.values(INTEGRATIONS).flat();
    } else {
      filtered = INTEGRATIONS[activeCategory] || [];
    }

    if (searchQuery) {
      filtered = filtered.filter(integration => 
        integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleIntegrationClick = (integration) => {
    setSelectedIntegration(integration);
    setShowConfigModal(true);
  };

  const handleConnect = async () => {
    // Simulated connection logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowConfigModal(false);
  };

  const handleDisconnect = async () => {
    // Simulated disconnection logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowConfigModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Integration Hub
        </h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search integrations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              flex items-center px-4 py-2 rounded-md whitespace-nowrap
              ${activeCategory === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }
            `}
          >
            <category.icon className="h-5 w-5 mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Integrations Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {getFilteredIntegrations().map((integration) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleIntegrationClick(integration)}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <img
                  src={integration.icon}
                  alt={integration.name}
                  className="h-12 w-12 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {integration.description}
                  </p>
                </div>
              </div>
              <div className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${integration.status === 'connected'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }
              `}>
                {integration.status === 'connected' ? 'Connected' : 'Available'}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Configuration Modal */}
      {showConfigModal && selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-lg w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img
                  src={selectedIntegration.icon}
                  alt={selectedIntegration.name}
                  className="h-12 w-12 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {selectedIntegration.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedIntegration.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiLink className="h-5 w-5 mr-2" />
                Connection Status: {selectedIntegration.status === 'connected' ? 'Active' : 'Not Connected'}
              </div>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FiClock className="h-5 w-5 mr-2" />
                Last Sync: {selectedIntegration.status === 'connected' ? '5 minutes ago' : 'Never'}
              </div>

              {selectedIntegration.status === 'connected' && (
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FiSettings className="h-5 w-5 mr-2" />
                  Settings configured
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              
              {selectedIntegration.status === 'connected' ? (
                <button
                  onClick={handleDisconnect}
                  className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={handleConnect}
                  className="px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700"
                >
                  Connect
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}