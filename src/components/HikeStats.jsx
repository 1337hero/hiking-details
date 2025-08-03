import React from 'react';

const HikeStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-600">Distance</div>
        <div className="text-2xl font-bold">{stats.distance}</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-600">Elevation Gain</div>
        <div className="text-2xl font-bold">{stats.elevationGain}</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-600">Duration</div>
        <div className="text-2xl font-bold">{stats.duration}</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-600">Difficulty</div>
        <div className={`text-2xl font-bold ${
          stats.difficulty === 'Easy' ? 'text-green-600' :
          stats.difficulty === 'Moderate' ? 'text-yellow-600' :
          'text-red-600'
        }`}>
          {stats.difficulty}
        </div>
      </div>
    </div>
  );
};

export default HikeStats;