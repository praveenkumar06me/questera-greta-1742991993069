import { motion } from 'framer-motion';
import { FiUsers, FiDollarSign, FiActivity, FiShoppingBag } from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';
import { useSubscription } from '../contexts/SubscriptionContext';

export default function Dashboard() {
  const { currentPlan } = useSubscription();

  const metrics = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      icon: FiDollarSign,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+5.2%',
      icon: FiUsers,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+3.8%',
      icon: FiShoppingBag,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900'
    },
    {
      title: 'Conversion Rate',
      value: '2.4%',
      change: '+1.2%',
      icon: FiActivity,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900'
    }
  ];

  const getLineChartOption = () => ({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#6B7280' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#6B7280' },
      splitLine: { lineStyle: { color: '#374151' } }
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: { color: '#3B82F6' }
      }
    ]
  });

  const getBarChartOption = () => ({
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#6B7280' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#6B7280' },
      splitLine: { lineStyle: { color: '#374151' } }
    },
    series: [
      {
        type: 'bar',
        data: [120, 200, 150, 80, 70],
        itemStyle: { color: '#10B981' }
      }
    ]
  });

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to your Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          You're currently on the {currentPlan.name} plan
        </p>
      </div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {metric.title}
                </h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">
                    {metric.change}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Weekly Sales
          </h3>
          <ReactECharts option={getLineChartOption()} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Top Products
          </h3>
          <ReactECharts option={getBarChartOption()} />
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
      >
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { event: 'New Order', user: 'John Doe', time: '5 minutes ago' },
                  { event: 'Payment Received', user: 'Jane Smith', time: '1 hour ago' },
                  { event: 'New User Registration', user: 'Mike Johnson', time: '2 hours ago' }
                ].map((activity, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {activity.event}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {activity.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}