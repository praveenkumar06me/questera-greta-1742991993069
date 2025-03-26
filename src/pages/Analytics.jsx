import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { FiTrendingUp, FiUsers, FiDollarSign, FiActivity } from 'react-icons/fi';
import { format, subDays } from 'date-fns';

const generateMockData = (days) => {
  return Array.from({ length: days }).map((_, index) => {
    const date = subDays(new Date(), days - 1 - index);
    return {
      date: format(date, 'MMM dd'),
      users: Math.floor(Math.random() * 100) + 50,
      revenue: Math.floor(Math.random() * 1000) + 500,
      activity: Math.floor(Math.random() * 200) + 100
    };
  });
};

const mockData = generateMockData(30);

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = {
    totalUsers: 1234,
    monthlyRevenue: 45678,
    activeUsers: 890,
    conversionRate: 2.5
  };

  const getChartOptions = (type) => {
    const dates = mockData.map(item => item.date);
    let series, yAxisName;

    switch (type) {
      case 'users':
        series = [{
          name: 'Users',
          type: 'line',
          smooth: true,
          data: mockData.map(item => item.users),
          itemStyle: { color: '#3B82F6' }
        }];
        yAxisName = 'Users';
        break;
      case 'revenue':
        series = [{
          name: 'Revenue',
          type: 'bar',
          data: mockData.map(item => item.revenue),
          itemStyle: { color: '#10B981' }
        }];
        yAxisName = 'Revenue ($)';
        break;
      case 'activity':
        series = [{
          name: 'Activity',
          type: 'line',
          smooth: true,
          areaStyle: {},
          data: mockData.map(item => item.activity),
          itemStyle: { color: '#6366F1' }
        }];
        yAxisName = 'Actions';
        break;
      default:
        series = [];
        yAxisName = '';
    }

    return {
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
        data: dates,
        axisLine: { lineStyle: { color: '#6B7280' } },
        axisLabel: { color: '#6B7280' }
      },
      yAxis: {
        type: 'value',
        name: yAxisName,
        axisLine: { lineStyle: { color: '#6B7280' } },
        axisLabel: { color: '#6B7280' },
        splitLine: { lineStyle: { color: '#374151' } }
      },
      series
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Metrics Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <FiUsers className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Users
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {metrics.totalUsers.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <FiDollarSign className="h-6 w-6 text-green-600 dark:text-green-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Monthly Revenue
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                ${metrics.monthlyRevenue.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <FiActivity className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Users
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {metrics.activeUsers.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
              <FiTrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Conversion Rate
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {metrics.conversionRate}%
              </h3>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {['overview', 'users', 'revenue', 'activity'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                User Growth
              </h3>
              <ReactECharts option={getChartOptions('users')} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Revenue Trend
              </h3>
              <ReactECharts option={getChartOptions('revenue')} />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analytics
            </h3>
            <ReactECharts option={getChartOptions(activeTab)} style={{ height: '400px' }} />
          </motion.div>
        )}
      </div>
    </div>
  );
}