import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { diseases } from '../data/mockData';
import DiseaseCard from '../components/DiseaseCard';
import { Search, AlertCircle, Book, Video } from 'lucide-react';

const Diseases = () => {
  const { farmType } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSymptomChecker, setShowSymptomChecker] = useState(false);

  const diseaseList = diseases[farmType] || [];
  const filteredDiseases = diseaseList.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Disease Library </h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search diseases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Disease Cards */}
          {filteredDiseases.map(disease => (
            <DiseaseCard key={disease.id} disease={disease} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Symptom Checker */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Quick Symptom Checker</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Answer a few questions to identify possible diseases
            </p>
            <button
              onClick={() => setShowSymptomChecker(true)}
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Start Checker
            </button>
          </div>

          {/* Learning Resources */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Learning Resources</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-blue-600 hover:underline">
                <Book className="w-4 h-4 mr-2" />
                Disease Prevention Guide
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:underline">
                <Video className="w-4 h-4 mr-2" />
                Vaccination Best Practices
              </a>
              <a href="#" className="flex items-center text-blue-600 hover:underline">
                <Book className="w-4 h-4 mr-2" />
                Biosecurity Measures
              </a>
            </div>
          </div>

          {/* Vaccination Reminders */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Vaccinations</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>CSF Vaccine</span>
                <span className="text-red-600">Due in 3 days</span>
              </div>
              <div className="flex justify-between">
                <span>FMD Vaccine</span>
                <span className="text-yellow-600">Due in 2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Symptom Checker Modal */}
      {showSymptomChecker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Symptom Checker</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">What symptoms do you see?</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Fever / High temperature
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Loss of appetite
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Diarrhea
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Respiratory issues
                  </label>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowSymptomChecker(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diseases;