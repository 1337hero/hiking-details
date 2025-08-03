import React from 'react';

const HikeInfo = ({ info }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{info.overview}</p>
      </section>

      {info.highlights && info.highlights.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Trail Highlights</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {info.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      {info.routeDescription && info.routeDescription.length > 0 && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Route Description</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {info.routeDescription.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
        </section>
      )}

      {info.gettingThere && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Getting There</h2>
          <p className="text-gray-700 leading-relaxed">{info.gettingThere}</p>
        </section>
      )}

      {info.whatToBring && info.whatToBring.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-3">What to Bring</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {info.whatToBring.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default HikeInfo;