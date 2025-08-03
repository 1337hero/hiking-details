export const thompsonPeakData = {
  name: "Thompson Peak via Alpine Way Trail",
  location: "Sawtooth Wilderness, Idaho",
  summitElevation: "10,751 ft (3,277 m)",
  gpxFile: "/thompson-peak-trail.gpx", // Place GPX file in public/
  trailhead: {
    lat: 44.1529,
    lng: -114.9187
  },
  waypoints: [
    { name: "Fishhook Creek Junction", lat: 44.1550, lng: -114.9210, elevation: "6,600 ft", miles: 0.8 },
    { name: "Alpine Way Junction", lat: 44.1604, lng: -114.9422, elevation: "7,400 ft", miles: 1.7 },
    { name: "Leave Trail (Climber's Path)", lat: 44.1480, lng: -114.9350, elevation: "8,200 ft", miles: 3.7 },
    { name: "Alpine Lake", lat: 44.1456, lng: -114.9301, elevation: "9,000 ft", miles: 5.0 },
    { name: "Thompson-Williams Saddle", lat: 44.1420, lng: -114.9250, elevation: "10,550 ft", miles: 6.0 },
    { name: "Summit", lat: 44.1387, lng: -114.9174, elevation: "10,751 ft", miles: 6.2 }
  ],
  stats: {
    distance: "12.4 mi round-trip",
    elevationGain: "4,100 ft",
    duration: "7–9 hours",
    difficulty: "Hard (Class 3 scramble)"
  },
  info: {
    overview:
      "Thompson Peak stands at 10,751 ft as the highest peak in Idaho's Sawtooth Range. This challenging hike combines forested switchbacks along Fishhook Creek, beautiful aspen groves on the Alpine Way, an unnamed alpine lake at ~9,000 ft, and a Class 3 scramble through the upper cirque above the Thompson/Williams saddle. The summit offers stunning panoramic views of the jagged Sawtooth skyline.",
    highlights: [
      "Summit elevation: 10,751 ft - highest peak in the Sawtooth Range",
      "Forested switchbacks along Fishhook Creek",
      "Aspen groves on the Alpine Way Trail",
      "Unnamed alpine lake at ~9,000 ft elevation",
      "Class 3 scramble in the upper cirque",
      "360° panoramic views of the jagged Sawtooth skyline",
      "Wildflowers in mid-summer",
      "One of Idaho's classic peak-bagging routes"
    ],
    routeDescription: [
      "Fishhook Creek Trail (0-0.8 mi): Start in forest with switchbacks; junction to Marshall & Island Lakes",
      "Turn north into aspen ridge; intersect Alpine Way Trail at ~1.7 mi",
      "Continue Alpine Way to ~3.7 mi; leave trail at faint climber's path",
      "Traverse through basin above unnamed alpine lake (~9,000 ft)",
      "Navigate talus/boulder fields toward Thompson-Williams saddle",
      "Final ascent: Class 3 scrambling up couloir/gully to summit"
    ],
    gettingThere:
      "Start at the Redfish Lake Trailhead near Stanley, ID. Parking is available at Redfish Lake Lodge and adjacent lots. From Boise/Meridian, expect about a 3-hour drive. The hike begins on the Alpine Way Trail, branching toward Williams Peak Divide before heading off-trail for the final summit push.",
    whatToBring: [
      "At least 3 liters of water (no reliable sources past the lakes)",
      "Plenty of trail snacks and a packed lunch",
      "Trekking poles for the ascent/descent",
      "GPS or map/compass for the scramble route",
      "Helmet if you’re concerned about loose rock on the scramble",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Layers – mornings are chilly even in summer",
      "First aid kit and blister care supplies"
    ]
  },
  parkingInfo: {
    location: "Redfish Lake Trailhead Parking Lot",
    fee: "Requires paid National Forest recreation pass (or Golden Eagle annual pass)",
    notes: "Fee station at Redfish Lake backpackers lot. Parking fills quickly on weekends - arrive before 7 AM. Alternative: Redfish Lake shuttle system. Avoid parking on roadsides."
  },
  permitInfo: {
    required: true,
    type: "Sawtooth Wilderness Permit",
    cost: "Free",
    process: "Self-issue envelope at signboard or wilderness boundary (fill before climbing)"
  },
  resources: [
    { name: "AllTrails", url: "https://www.alltrails.com/trail/us/idaho/thompson-peak-via-alpine-way-trail" },
    { name: "Two Outliers Guide", url: "https://twooutliers.com/thompson-peak-hike-idaho/" }
  ],
  bestSeason: "Mid-July through early August (clear trails, stable weather)",
  weatherNotes: {
    snowConditions: "Snowfields may persist into June; early season requires ice axe, helmet, crampons",
    thunderstormRisk: "Most unreliable between midday and 4 PM - plan to be off ridge before noon"
  },
  dogFriendly: true,
  meetingDetails: {
    time: "6:30 AM trail start",
    location: "Redfish Lake Trailhead Parking Lot",
    notes:
      "Depart Boise/Meridian at 3:15 AM (~3 hr drive with buffer). Arrive by 6:15 AM for parking. Start hiking 6:30 AM to beat heat and maximize shade."
  },
  itinerary: [
    { time: "3:15 AM", activity: "Depart Boise/Meridian", notes: "~3 hrs drive (add 15 min buffer for fuel/snacks)" },
    { time: "6:15 AM", activity: "Arrive Redfish TH", notes: "Optimal for early start and parking ease" },
    { time: "6:30 AM", activity: "Trailhead Start", notes: "Sunrise ~5:55 AM: beat the heat, maximize shade" },
    { time: "9:00 AM", activity: "Reach Alpine Lake (~9,000 ft)", notes: "5 mi in; hydration & sun-cream refill" },
    { time: "9:30 AM", activity: "Begin Scramble Section", notes: "Route becomes complex; use topo/GPS" },
    { time: "11:30 AM", activity: "Summit Attained", notes: "Allows descent before storm risk window" },
    { time: "12:00 PM", activity: "Cross Saddle/Off Ridge", notes: "In line with typical storm surge timing" },
    { time: "3:30-4:00 PM", activity: "Return Trailhead", notes: "Swap footwear, debrief, head to Stanley" }
  ],
  safetyNotes: {
    routeFinding: [
      "Cairns may exist but trails often faint above 9,000 ft",
      "Place confident navigator in lead; another as sweep",
      "Agree on communication signals for reduced visibility",
      "Expect loose rock in final couloir - wear gloves, deliberate steps"
    ],
    fitnessRequirements: [
      "Sustain ~2,500 ft/hr in rocky terrain",
      "Prior Class 2-3 scrambling experience recommended",
      "Experience with overnight hikes to 9,000 ft helpful"
    ]
  },
  groupCoordination: {
    roles: ["Lead Navigator", "Sweep", "Gear Manager", "Medic"],
    logistics: [
      "Reserve 1-2 trunk spaces for potential evacuation",
      "Light breakfast in Boise/Stanley; trail snacks at lake; summit brunch",
      "Protein dinner post-hike in Stanley"
    ],
    flexPlan: "If thunder forecast, consider Sawtooth Lake or Alice Lake alternatives",
    emergencyContact: "Stanley ranger station (satellite phone/beacon if needed)"
  },
  leaveNoTrace: [
    "Stick to established trails or climber-use paths",
    "Pack out all trash and toilet paper",
    "Bury human waste 6-8 inches deep, 200 ft from lakes/trails",
    "No fires above ~9,000 ft; camp only in approved zones"
  ]
};
