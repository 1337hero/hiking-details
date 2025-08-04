export const thompsonPeakData = {
  name: "HTOC - Men's Hike - Thompson Peak Hike",
  location: "Sawtooth Wilderness, Idaho",
  summitElevation: "10,751 ft",
  gpxFile: "/thompson-peak-trail.gpx", // Place GPX file in public/
  trailhead: {
    lat: 44.1529,
    lng: -114.9187,
  },
  parking: {
    lat: 44.14743,
    lng: -114.91967,
  },
  waypoints: [
    {
      name: "Fishhook Creek Junction",
      lat: 44.14972,
      lng: -114.93161,
      elevation: "6,700 ft",
      miles: 0.8,
    },
    {
      name: "Alpine Way Junction",
      lat: 44.14954,
      lng: -114.98394,
      elevation: "7,400 ft",
      miles: 1.7,
    },
    {
      name: "Alpine Lake",
      lat: 44.14595,
      lng: -114.99965,
      elevation: "9,000 ft",
      miles: 5.0,
    },
    {
      name: "Summit",
      lat: 44.14168,
      lng: -115.01027,
      elevation: "10,751 ft",
      miles: 6.2,
    },
  ],
  stats: {
    distance: "12.4 mi round-trip",
    elevationGain: "4,100 ft",
    duration: "5-7 hours",
    difficulty: "Hard",
  },
  info: {
    overview:
      "**Thompson Peak, at 10,751 ft, stands as the crown of Idaho's Sawtooth Range—and this hike is more than a climb; it’s an opportunity.** Rugged wilderness meets meaningful connection as you move from forested switchbacks along Fishhook Creek to open alpine terrain. By the unnamed lake at 9,000 ft, the path steepens into a Class 3 scramble through the cirque above the Thompson/Williams saddle, demanding grit and trust.\n\nBut this climb is a forge. Shoulder to shoulder with fellow men, you’ll test limits and sharpen each other—because **iron sharpens iron**. Conversations happen between breaths, laughter echoes off granite, and each step upward becomes a shared victory.\n\nBeyond the summit views—the jagged skyline of the Sawtooths—you’ll carry something greater: renewed perspective, stronger friendships, and confidence tempered at altitude. This isn’t just a hike—it’s a journey of bonding, growth, and rising stronger together.",
    highlights: [
      "Summit elevation: 10,751 ft - highest peak in the Sawtooth Range",
      "Forested switchbacks along Fishhook Creek",
      "Aspen groves on the Alpine Way Trail",
      "Unnamed alpine lake at ~9,000 ft elevation",
      "Class 3 scramble in the upper cirque",
      "360° panoramic views of the jagged Sawtooth skyline",
      "One of Idaho's classic peak-bagging routes",
    ],
    routeDescription: [
      "Fishhook Creek Trail (0-0.8 mi): Start in forest with switchbacks; junction to Marshall & Island Lakes",
      "Turn north into aspen ridge; intersect Alpine Way Trail at ~1.7 mi",
      "Continue Alpine Way to ~3.7 mi; leave trail at faint climber's path",
      "Traverse through basin above alpine lake (~9,000 ft)",
      "Navigate talus/boulder fields toward Thompson-Williams saddle",
      "Final ascent: Class 3 scrambling up couloir/gully to summit",
    ],
    gettingThere:
      "Start at the Redfish Lake Trailhead near Stanley, ID. Parking is available at Redfish Lake Lodge and adjacent lots. From Boise/Meridian, expect about a 3-hour drive. The hike begins on the Alpine Way Trail, branching toward Williams Peak Divide before heading off-trail for the final summit push.",
    whatToBring: [
      "At least 3 liters of water",
      "Plenty of trail snacks and a packed lunch",
      "Trekking poles if desired for the ascent/descent",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Layers – mornings are chilly even in summer",
      "Backpack with enough capacity for a long day hike",
      "First aid kit and blister care supplies",
    ],
  },
  parkingInfo: {
    location: "Redfish Lake Trailhead Parking Lot",
    fee: "Requires paid National Forest recreation pass (or Golden Eagle annual pass)",
    notes:
      "Fee station at Redfish Lake backpackers lot. Parking fills quickly on weekends - arrive before 7 AM. Alternative: Redfish Lake shuttle system. Avoid parking on roadsides.",
  },
  permitInfo: {
    required: true,
    type: "Sawtooth Wilderness Permit",
    cost: "Free",
    process:
      "Self-issue envelope at signboard or wilderness boundary (fill before climbing)",
  },
  resources: [
    {
      name: "AllTrails",
      url: "https://www.alltrails.com/trail/us/idaho/thompson-peak-via-alpine-way-trail",
    },
    {
      name: "Two Outliers Guide",
      url: "https://twooutliers.com/thompson-peak-hike-idaho/",
    },
  ],
  bestSeason: "Mid-July through early August (clear trails, stable weather)",
  meetingDetails: {
    time: "8:00 AM trail start",
    location: "Redfish Lake Trailhead Parking Lot",
    notes:
      "Depart Boise/Meridian around 5:00 AM (~3 hr drive). Arrive around 8:00 AM, start hiking promptly to ensure off-ridge by early afternoon.",
  },
  itinerary: [
    {
      time: "5:00 AM",
      activity: "Depart Boise/Meridian",
      notes: "assume ~3 hr drive with optional quick stop",
    },
    {
      time: "7:50 AM",
      activity: "Arrive & Park at Redfish TH",
      notes: "Secure parking before crowds",
    },
    {
      time: "8:15 AM",
      activity: "Trailhead Start",
      notes: "Begin ascent via Fishhook Creek",
    },
    {
      time: "10:30 AM",
      activity: "Reach Alpine Lake (~9,000 ft)",
      notes: "Time for water & sunscreen",
    },
    {
      time: "10:45 AM",
      activity: "Begin Scramble Section",
      notes: "Slow final 1.2 mi to summit",
    },
    {
      time: "12:45 PM",
      activity: "Summit",
      notes: "Allow summit break, photos, snacks",
    },
    {
      time: "1:00 PM",
      activity: "Cross Saddle / Off Ridge",
      notes: "Beat any possible thunderstorms",
    },
    {
      time: "3:30–4:00 PM",
      activity: "Return Trailhead",
      notes: "Swap shoes, debrief, head to Stanley",
    },
    {
      time: "5:00 PM",
      activity: "Dinner in Stanley",
      notes: "Sawtooth Luce's Restaurant",
    },
  ],
  safetyNotes: {
    fitnessRequirements: [
      "Must be in good physical condition",
      "Prior hiking experience recommended",
      "No heart or respiratory conditions",
      "Expect rocky, uneven trail conditions",
    ],
    weatherConsiderations: [
      "Afternoon thunderstorms common July-August - start early to summit by noon",
      "Lightning risk extreme above treeline - descend immediately if storms approach",
      "Temperature can drop 30-40°F from trailhead to summit",
      "Wind speeds often exceed 40mph on exposed ridges",
      "Turn back if dark clouds build before reaching summit"
    ],
    emergencyProtocol: [
      "Cell service unreliable - Trail Leader will have a satellite communicator",
      "Nearest medical: St. Luke's Wood River (Ketchum) ~90 minutes",
      "Emergency evacuation: Call 911, Custer County Search & Rescue",
    ]
  },
  leaveNoTrace: [
    "Stick to established trails or climber-use paths",
    "Pack out all trash and toilet paper",
    "Bury human waste 6-8 inches deep, 200 ft from lakes/trails",
    "No fires above ~9,000 ft; camp only in approved zones",
  ],
};
