import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { analyticsData } from '../data/mockData';
import { TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Analytics = () => {
  const { farmType } = useApp();
  const [timeRange, setTimeRange] = useState('6months');

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Farm Analytics Dashboard</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setTimeRange('1month')}
              className={`px-4 py-2 rounded ${timeRange === '1month' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              1 Month
            </button>
            <button
              onClick={() => setTimeRange('6months')}
              className={`px-4 py-2 rounded ${timeRange === '6months' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              6 Months
            </button>
            <button
              onClick={() => setTimeRange('1year')}
              className={`px-4 py-2 rounded ${timeRange === '1year' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              1 Year
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Animals"
          value="487"
          change="+12%"
          trend="up"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <MetricCard
          title="Avg. Weight Gain"
          value="15 kg/month"
          change="+8%"
          trend="up"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <MetricCard
          title="Mortality Rate"
          value="2.3%"
          change="-0.5%"
          trend="down"
          icon={<TrendingDown className="w-5 h-5" />}
        />
        <MetricCard
          title="Feed Efficiency"
          value="2.2 FCR"
          change="-5%"
          trend="down"
          icon={<TrendingDown className="w-5 h-5" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Growth Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            {farmType === 'pig' ? 'Average Pig Weight' : 'Batch Performance'}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.pigGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgWeight" stroke="#10b981" strokeWidth={2} name="Avg Weight (kg)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mortality Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Mortality Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.poultryMortality}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="mortality" fill="#ef4444" name="Mortality %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Feed Efficiency */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Feed Conversion Ratio</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.feedEfficiency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="fcr" stroke="#3b82f6" strokeWidth={2} name="FCR" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Comparison with Regional Average */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Your Farm vs Regional Average</h3>
          <div className="space-y-4">
            <ComparisonBar label="Growth Rate" yourValue={85} avgValue={72} />
            <ComparisonBar label="Feed Efficiency" yourValue={78} avgValue={65} />
            <ComparisonBar label="Health Score" yourValue={92} avgValue={80} />
            <ComparisonBar label="Productivity" yourValue={88} avgValue={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, trend, icon }) => {
  const isPositive = trend === 'up';
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-gray-600">{title}</p>
        <div className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm mt-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {change} from last period
      </p>
    </div>
  );
};

const ComparisonBar = ({ label, yourValue, avgValue }) => {
  const maxValue = Math.max(yourValue, avgValue, 100);
  return (
    <div>
      <p className="text-sm font-medium mb-2">{label}</p>
      <div className="space-y-1">
        <div className="flex items-center">
          <span className="text-xs w-20">You</span>
          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div
              className="bg-green-600 h-6 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${(yourValue / maxValue) * 100}%` }}
            >
              <span className="text-xs text-white font-medium">{yourValue}%</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-xs w-20">Regional</span>
          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
            <div
              className="bg-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${(avgValue / maxValue) * 100}%` }}
            >
              <span className="text-xs text-white font-medium">{avgValue}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;