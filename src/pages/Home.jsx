import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { feedPosts, governmentPolicies } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { TrendingUp, Shield, DollarSign } from 'lucide-react';

const Home = () => {
  const { farmType } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredPosts = feedPosts.filter(post => {
    if (filter === 'all') return true;
    if (filter === 'government') return post.type === 'scheme';
    if (filter === farmType) return post.animalType === farmType || post.animalType === 'both';
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">What's happening in your area</h2>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                All Posts
              </button>
                            <button
                onClick={() => setFilter(farmType)}
                className={`px-4 py-2 rounded-lg ${filter === farmType ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                {farmType === 'pig' ? 'Pig Farming' : 'Poultry Farming'}
              </button>
              <button
                onClick={() => setFilter('government')}
                className={`px-4 py-2 rounded-lg ${filter === 'government' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              >
                Government Schemes
              </button>
            </div>
          </div>

          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Disease Alerts */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-red-600 mr-2" />
              <h3 className="font-semibold text-red-800">Disease Alerts</h3>
            </div>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• ASF reported 15km away - Increase biosecurity</li>
              <li>• Seasonal flu risk high this week</li>
              <li>• Check vaccination schedules</li>
            </ul>
          </div>

          {/* Government Policies */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-3">
              <DollarSign className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold">Government Benefits</h3>
            </div>
            <div className="space-y-3">
              {governmentPolicies.slice(0, 2).map(policy => (
                <div key={policy.id} className="border-b pb-2">
                  <h4 className="font-medium text-sm">{policy.name}</h4>
                  <p className="text-xs text-gray-600">{policy.coverage}</p>
                </div>
              ))}
              <a href="#" className="text-sm text-green-600 hover:underline">View all schemes →</a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold">Your Farm Stats</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total Animals</span>
                <span className="font-semibold">487</span>
              </div>
              <div className="flex justify-between">
                <span>Avg. Growth Rate</span>
                <span className="font-semibold text-green-600">+12%</span>
              </div>
              <div className="flex justify-between">
                <span>Compliance Score</span>
                <span className="font-semibold">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;