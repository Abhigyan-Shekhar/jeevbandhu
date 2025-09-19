import React from 'react';
import { useApp } from '../context/AppContext';
import { Globe, Bell, Shield, Smartphone, HelpCircle } from 'lucide-react';

const Settings = () => {
  const { language, setLanguage } = useApp();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow divide-y">
        {/* Language Settings */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Globe className="w-5 h-5 mr-3 text-blue-600" />
            <h3 className="text-lg font-semibold">Language Preferences</h3>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full md:w-64 p-2 border rounded-lg"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="kn">ಕನ್ನಡ (Kannada)</option>
          </select>
        </div>

        {/* Notification Settings */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Bell className="w-5 h-5 mr-3 text-purple-600" />
            <h3 className="text-lg font-semibold">Notification Settings</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Vaccination Reminders</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span>Disease Outbreak Alerts</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span>Community Updates</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span>Government Scheme Updates</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-5 h-5 mr-3 text-green-600" />
            <h3 className="text-lg font-semibold">Privacy Settings</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Share farm location</span>
              <input type="checkbox" className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span>Show profile to other farmers</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
            <label className="flex items-center justify-between">
              <span>Allow messages from community</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </label>
          </div>
        </div>

        {/* Offline Settings */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Smartphone className="w-5 h-5 mr-3 text-orange-600" />
            <h3 className="text-lg font-semibold">Offline Data</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Manage data stored for offline use
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Clear Offline Data
          </button>
        </div>

        {/* Help & Support */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
            <h3 className="text-lg font-semibold">Help & Support</h3>
          </div>
          <div className="space-y-2">
            <a href="#" className="text-blue-600 hover:underline block">User Guide</a>
            <a href="#" className="text-blue-600 hover:underline block">FAQs</a>
            <a href="#" className="text-blue-600 hover:underline block">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;