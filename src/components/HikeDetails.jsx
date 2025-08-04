import React from "react";
import HikeInfo from "./HikeInfo";
import HikeItinerary from "./HikeItinerary";
import HikeSafety from "./HikeSafety";
import HikeStats from "./HikeStats";
import Map from "./Map";

const HikeDetails = ({ hikeData }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[720px] w-full">
        <Map
          gpxFile={hikeData.gpxFile}
          trailhead={hikeData.trailhead}
          waypoints={hikeData.waypoints}
        />
        
        {/* Mobile-optimized title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6 lg:hidden">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{hikeData.name}</h1>
          <p className="text-sm sm:text-base text-gray-200">{hikeData.location}</p>
          {hikeData.summitElevation && (
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">Summit: {hikeData.summitElevation}</p>
          )}
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 lg:hidden animate-bounce">
          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <header className="mb-4 sm:mb-8 lg:block hidden">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {hikeData.name}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">{hikeData.location}</p>
          {hikeData.summitElevation && (
            <p className="text-base sm:text-lg text-gray-700 mt-1">
              Summit: {hikeData.summitElevation}
            </p>
          )}
        </header>

        <HikeStats stats={hikeData.stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <HikeInfo info={hikeData.info} />
          </div>

          <aside className="space-y-6">
            {hikeData.meetingDetails && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Meeting Details</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Time:</strong> {hikeData.meetingDetails.time}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Location:</strong> {hikeData.meetingDetails.location}
                </p>
                <p className="pb-2">
                  <a
                    href={`https://www.google.com/maps/dir/Current+Location/${hikeData.parking ? `${hikeData.parking.lat},${hikeData.parking.lng}` : `${hikeData.trailhead.lat},${hikeData.trailhead.lng}`}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-bold"
                  >
                  Get Directions
                </a></p>
                {hikeData.meetingDetails.notes && (
                  <p className="text-sm text-gray-600">
                    <strong>Notes:</strong> {hikeData.meetingDetails.notes}
                  </p>
                )}
              </div>
            )}

            {hikeData.permitInfo && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Permit Info</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Type:</strong> {hikeData.permitInfo.type}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Cost:</strong> {hikeData.permitInfo.cost}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Process:</strong> {hikeData.permitInfo.process}
                </p>
              </div>
            )}

            {hikeData.parkingInfo && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Parking Info</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Location:</strong> {hikeData.parkingInfo.location}
                </p>
                {hikeData.parkingInfo.fee && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Fee:</strong> {hikeData.parkingInfo.fee}
                  </p>
                )}
                {hikeData.parkingInfo.notes && (
                  <p className="text-sm text-gray-600">
                    <strong>Notes:</strong> {hikeData.parkingInfo.notes}
                  </p>
                )}
              </div>
            )}

            {hikeData.resources && hikeData.resources.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {hikeData.resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-sm"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* Itinerary Section */}
        <HikeItinerary itinerary={hikeData.itinerary} />

        {/* Safety Information */}
        <HikeSafety
          safetyNotes={hikeData.safetyNotes}
          weatherNotes={hikeData.weatherNotes}
          leaveNoTrace={hikeData.leaveNoTrace}
        />
      </div>
    </div>
  );
};

export default HikeDetails;
