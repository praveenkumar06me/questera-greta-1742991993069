import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiBox, 
  FiUsers, 
  FiSettings, 
  FiBarChart, 
  FiLink,
  FiCreditCard,
  FiPieChart,
  FiGrid
} from 'react-icons/fi';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FiBarChart, label: 'Analytics', path: '/analytics' },
    { icon: FiPieChart, label: 'Reports', path: '/reports' },
    { icon: FiCreditCard, label: 'Subscription', path: '/subscription' },
    { icon: FiBox, label: 'Features', path: '/features' },
    { icon: FiUsers, label: 'Users', path: '/users' },
    { icon: FiGrid, label: 'Integrations', path: '/integrations' },
    { icon: FiSettings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className={`h-screen bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 
              hover:bg-gray-100 dark:hover:bg-gray-700
              ${location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-700' : ''}
            `}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}