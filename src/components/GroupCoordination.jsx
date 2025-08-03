import React from 'react';

const GroupCoordination = ({ groupCoordination }) => {
  if (!groupCoordination) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">👬 Men's Group Coordination</h2>
      
      {groupCoordination.roles && groupCoordination.roles.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Designated Roles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {groupCoordination.roles.map((role, index) => (
              <div key={index} className="bg-blue-50 rounded-md px-3 py-2 text-center">
                <span className="text-sm font-medium text-blue-800">{role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {groupCoordination.logistics && groupCoordination.logistics.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Logistics</h3>
          <ul className="list-disc list-inside space-y-1">
            {groupCoordination.logistics.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {groupCoordination.flexPlan && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Flex Plan</h3>
          <p className="text-gray-700">{groupCoordination.flexPlan}</p>
        </div>
      )}

      {groupCoordination.emergencyContact && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <h3 className="text-lg font-semibold text-red-800 mb-1">Emergency Contact</h3>
          <p className="text-red-700">{groupCoordination.emergencyContact}</p>
        </div>
      )}
    </div>
  );
};

export default GroupCoordination;