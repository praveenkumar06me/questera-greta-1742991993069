import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function IntegrationStatus({ integration }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'connected':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex items-center">
      {integration.status === 'connected' ? (
        <FiCheckCircle className={`h-5 w-5 ${getStatusColor(integration.status)}`} />
      ) : (
        <FiAlertCircle className={`h-5 w-5 ${getStatusColor(integration.status)}`} />
      )}
      <span className={`ml-2 text-sm ${getStatusColor(integration.status)}`}>
        {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
      </span>
    </div>
  );
}