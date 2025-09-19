import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { myPigs, myPoultryBatches } from '../data/mockData';
import { Plus, Edit, Calendar, Weight, Syringe, Users } from 'lucide-react';

const Farm = () => {
  const { farmType, setFarmType } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Farm Type Selector */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setFarmType('pig')}
            className={`flex-1 py-3 rounded-lg font-medium ${
              farmType === 'pig' ? 'bg-pink-600 text-white' : 'bg-gray-200'
            }`}
          >
            🐷 Pig Farm
          </button>
          <button
            onClick={() => setFarmType('poultry')}
            className={`flex-1 py-3 rounded-lg font-medium ${
              farmType === 'poultry' ? 'bg-yellow-600 text-white' : 'bg-gray-200'
            }`}
          >
            🐔 Poultry Farm
          </button>
        </div>
      </div>

      {/* Add Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add {farmType === 'pig' ? 'Pig' : 'Batch'}
        </button>
      </div>

      {/* Animals/Batches Grid */}
      {farmType === 'pig' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPigs.map(pig => (
            <PigCard key={pig.id} pig={pig} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myPoultryBatches.map(batch => (
            <PoultryBatchCard key={batch.id} batch={batch} />
          ))}
        </div>
      )}

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Add New {farmType === 'pig' ? 'Pig' : 'Batch'}
            </h3>
            <form className="space-y-4">
              {farmType === 'pig' ? (
                <>
                  <input type="text" placeholder="Pig ID" className="w-full p-2 border rounded" />
                  <select className="w-full p-2 border rounded">
                    <option>Yorkshire</option>
                    <option>Duroc</option>
                    <option>Landrace</option>
                  </select>
                  <select className="w-full p-2 border rounded">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <input type="date" placeholder="Birth Date" className="w-full p-2 border rounded" />
                  <input type="number" placeholder="Weight (kg)" className="w-full p-2 border rounded" />
                </>
              ) : (
                <>
                  <input type="text" placeholder="Batch ID" className="w-full p-2 border rounded" />
                  <select className="w-full p-2 border rounded">
                    <option>Broiler</option>
                    <option>Layer</option>
                    <option>Native</option>
                  </select>
                  <input type="date" placeholder="Hatch Date" className="w-full p-2 border rounded" />
                  <input type="number" placeholder="Number of Birds" className="w-full p-2 border rounded" />
                </>
              )}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 py-2 border border-gray-300 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const PigCard = ({ pig }) => {
  const age = Math.floor((new Date() - new Date(pig.birthDate)) / (1000 * 60 * 60 * 24 * 30));
  const nextVaccination = pig.vaccinations.find(v => new Date(v.nextDue) > new Date());

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{pig.id}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <Edit className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{pig.breed} • {pig.sex} • {age} months</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Weight className="w-4 h-4 mr-2" />
          <span>{pig.currentWeight} kg</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Syringe className="w-4 h-4 mr-2" />
          <span>Next: {nextVaccination?.vaccine} ({new Date(nextVaccination?.nextDue).toLocaleDateString()})</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t flex space-x-2">
        <button className="flex-1 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
          Add Weight
        </button>
        <button className="flex-1 py-1 text-sm bg-green-50 text-green-600 rounded hover:bg-green-100">
          Vaccinate
        </button>
      </div>
    </div>
  );
};

const PoultryBatchCard = ({ batch }) => {
  const age = Math.floor((new Date() - new Date(batch.hatchDate)) / (1000 * 60 * 60 * 24));
  const mortalityRate = ((batch.initialCount - batch.currentCount) / batch.initialCount * 100).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">{batch.id}</h3>
        <button className="text-gray-500 hover:text-gray-700">
          <Edit className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Breed</p>
          <p className="font-semibold">{batch.breed}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Age</p>
          <p className="font-semibold">{age} days</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Count</p>
          <p className="font-semibold">{batch.currentCount}/{batch.initialCount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Mortality</p>
          <p className="font-semibold text-red-600">{mortalityRate}%</p>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 py-2 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
          Log Feed
        </button>
        <button className="flex-1 py-2 text-sm bg-yellow-50 text-yellow-600 rounded hover:bg-yellow-100">
          Update Count
        </button>
        <button className="flex-1 py-2 text-sm bg-green-50 text-green-600 rounded hover:bg-green-100">
          Health Check
        </button>
      </div>
    </div>
  );
};

export default Farm;