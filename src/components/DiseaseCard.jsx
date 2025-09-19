import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

const DiseaseCard = ({ disease }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
          <h3 className="text-lg font-semibold">{disease.name}</h3>
        </div>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      {expanded && (
        <div className="mt-4 space-y-3">
          <div>
            <h4 className="font-medium text-gray-700">Symptoms:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {disease.symptoms.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Prevention:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {disease.prevention.map((prev, idx) => (
                <li key={idx}>{prev}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700">Treatment:</h4>
            <p className="text-gray-600 mt-1">{disease.treatment}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseCard;