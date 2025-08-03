import React from 'react';

const HikeSafety = ({ safetyNotes, weatherNotes, leaveNoTrace }) => {
  return (
    <div className="space-y-6 mt-8">
      {/* Safety & Route-Finding */}
      {safetyNotes && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">🛡️ Safety & Route-Finding</h2>
          
          {safetyNotes.routeFinding && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Route-Finding Notes</h3>
              <ul className="list-disc list-inside space-y-1">
                {safetyNotes.routeFinding.map((note, index) => (
                  <li key={index} className="text-gray-700">{note}</li>
                ))}
              </ul>
            </div>
          )}
          
          {safetyNotes.fitnessRequirements && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Fitness & Experience Requirements</h3>
              <ul className="list-disc list-inside space-y-1">
                {safetyNotes.fitnessRequirements.map((req, index) => (
                  <li key={index} className="text-gray-700">{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Weather Considerations */}
      {weatherNotes && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">⛈️ Weather Considerations</h2>
          <div className="space-y-3">
            {weatherNotes.snowConditions && (
              <div>
                <h3 className="font-semibold">Snow Conditions</h3>
                <p className="text-gray-700">{weatherNotes.snowConditions}</p>
              </div>
            )}
            {weatherNotes.thunderstormRisk && (
              <div>
                <h3 className="font-semibold text-red-600">Thunderstorm Risk</h3>
                <p className="text-gray-700">{weatherNotes.thunderstormRisk}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Leave No Trace */}
      {leaveNoTrace && leaveNoTrace.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">🌿 Leave No Trace</h2>
          <ul className="list-disc list-inside space-y-1">
            {leaveNoTrace.map((principle, index) => (
              <li key={index} className="text-gray-700">{principle}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HikeSafety;