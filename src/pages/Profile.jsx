import React from 'react';
import { userProfile } from '../data/mockData';
import { MapPin, Calendar, Award, Users, FileText } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{userProfile.name}</h2>
            <div className="flex items-center text-gray-600 mt-2 space-x-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {userProfile.location}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Joined {new Date(userProfile.joinDate).toLocaleDateString()}
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Edit Profile
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold">{userProfile.followers}</p>
          <p className="text-gray-600">Followers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold">{userProfile.following}</p>
          <p className="text-gray-600">Following</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold">{userProfile.posts}</p>
          <p className="text-gray-600">Posts</p>
        </div>
      </div>

      {/* Farm Types */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Farm Types</h3>
        <div className="flex space-x-4">
          {userProfile.farmType.includes('pig') && (
            <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-lg">
              🐷 Pig Farming
            </div>
          )}
          {userProfile.farmType.includes('poultry') && (
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg">
              🐔 Poultry Farming
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-600" />
          Achievements & Badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userProfile.badges.map((badge, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;