import React, { useState, useEffect } from 'react';
import { complianceChecklist } from '../data/mockData';
import { CheckCircle, Circle, Award, TrendingUp } from 'lucide-react';

const Compliance = () => {
  const [checkedTasks, setCheckedTasks] = useState({});
  const [complianceScore, setComplianceScore] = useState(0);

  useEffect(() => {
    const completed = Object.values(checkedTasks).filter(Boolean).length;
    const score = Math.round((completed / complianceChecklist.length) * 100);
    setComplianceScore(score);
  }, [checkedTasks]);

  const toggleTask = (taskId) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const tasksByCategory = complianceChecklist.reduce((acc, task) => {
    if (!acc[task.category]) acc[task.category] = [];
    acc[task.category].push(task);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto">
      {/* Score Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Daily Compliance Tracker</h2>
            <p className="text-gray-600">Complete your daily biosecurity checklist</p>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${getScoreColor(complianceScore)}`}>
              {complianceScore}%
            </div>
            <p className="text-sm text-gray-600">Compliance Score</p>
          </div>
        </div>
      </div>

      {/* Tasks by Category */}
      {Object.entries(tasksByCategory).map(([category, tasks]) => (
        <div key={category} className="bg-white rounded-lg shadow p-6 mb-4">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            {category}
          </h3>
          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="mr-3"
                  >
                    {checkedTasks[task.id] ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  <div>
                    <p className={`font-medium ${checkedTasks[task.id] ? 'text-gray-500 line-through' : ''}`}>
                      {task.task}
                    </p>
                    <p className="text-sm text-gray-500">{task.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Weekly Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Weekly Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-600">Avg. Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">42</p>
            <p className="text-sm text-gray-600">Tasks Completed</p>
          </div>
                    <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">42</p>
            <p className="text-sm text-gray-600">Tasks Completed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-yellow-600">7</p>
            <p className="text-sm text-gray-600">Missed Tasks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">6</p>
            <p className="text-sm text-gray-600">Streak Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;