import { FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              About Amigos
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Founded by Robert, Amigos is a leading SaaS platform helping businesses grow and succeed.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <div className="mt-4 space-y-2">
              <a 
                href="mailto:support@cloudsuite.com" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >
                <FiMail className="h-5 w-5 mr-2" />
                support@cloudsuite.com
              </a>
              <a 
                href="https://instagram.com/cloudsuite_saas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >
                <FiInstagram className="h-5 w-5 mr-2" />
                @cloudsuite_saas
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <a href="/about" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600">
                About
              </a>
              <a href="/features" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600">
                Features
              </a>
              <a href="/pricing" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600">
                Pricing
              </a>
              <a href="/contact" className="block text-gray-600 dark:text-gray-300 hover:text-primary-600">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Amigos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}