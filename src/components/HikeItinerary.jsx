import React from 'react';

const HikeItinerary = ({ itinerary }) => {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">📅 Suggested Itinerary</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4 font-semibold text-gray-700">Time (MDT)</th>
              <th className="text-left py-2 pr-4 font-semibold text-gray-700">Activity</th>
              <th className="text-left py-2 font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody>
            {itinerary.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 pr-4 text-sm font-medium">{item.time}</td>
                <td className="py-3 pr-4 text-sm font-medium">{item.activity}</td>
                <td className="py-3 text-sm text-gray-600">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HikeItinerary;