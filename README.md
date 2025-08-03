# Hike Details Landing Page

A React-based single page application for displaying detailed hiking trail information, similar to AllTrails. Built with Vite, React, Tailwind CSS v4, and Mapbox GL JS.

## Features

- 📍 Interactive map with GPX trail visualization
- 📊 Trail statistics (distance, elevation, duration, difficulty)
- 📝 Detailed trail information sections
- 👥 Meeting details for group hikes
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS v4

## Prerequisites

- Node.js 20+ or Bun
- Mapbox account for map functionality

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   VITE_MAPBOX_TOKEN=your_mapbox_token_here
   ```
   Get your token from [Mapbox](https://account.mapbox.com/)

4. Start the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

## Customizing Your Hike

### 1. Update Hike Data

Edit `src/data/sampleHike.js` with your trail information:

```javascript
export const sampleHikeData = {
  name: "Your Trail Name",
  location: "Trail Location",
  gpxFile: "/your-trail.gpx", // Path to your GPX file
  stats: {
    distance: "10.5 mi",
    elevationGain: "2,800 ft",
    duration: "4-5 hours",
    difficulty: "Moderate" // Easy, Moderate, or Hard
  },
  info: {
    overview: "Description of your trail...",
    highlights: [
      "Scenic viewpoints",
      "Wildlife opportunities",
      // Add more highlights
    ],
    gettingThere: "Directions to trailhead...",
    whatToBring: [
      "3L of water",
      "Trail snacks",
      // Add more items
    ]
  },
  bestSeason: "April - October",
  permitRequired: false,
  dogFriendly: true,
  meetingDetails: {
    time: "7:00 AM",
    location: "Trailhead parking lot",
    notes: "Additional meeting notes"
  }
};
```

### 2. Add Your GPX File

1. Place your GPX file in the `public` directory
2. Update the `gpxFile` path in your hike data to match the filename
3. The map will automatically center on your trail and display the route

### 3. Creating Multiple Hikes

To create additional hike pages:

1. Create new data files in `src/data/`:
   ```javascript
   // src/data/anotherHike.js
   export const anotherHikeData = {
     // ... hike configuration
   };
   ```

2. Import and use different hike data in App.jsx:
   ```javascript
   import { anotherHikeData } from './data/anotherHike';
   
   function App() {
     return <HikeDetails hikeData={anotherHikeData} />;
   }
   ```

3. For multiple pages, consider adding React Router:
   ```bash
   bun add react-router-dom
   ```

## Customizing Styles

The project uses Tailwind CSS v4. To customize styles:

1. Edit component files directly with Tailwind classes
2. For custom colors or themes, add CSS variables to `src/index.css`:
   ```css
   @import "tailwindcss";
   
   @theme {
     --color-brand-500: #your-color;
   }
   ```

## Building for Production

```bash
bun build
# or
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

The built site can be deployed to any static hosting service:

- **Netlify**: Drop the `dist` folder into Netlify
- **Vercel**: Connect your repository and deploy
- **GitHub Pages**: Use the gh-pages branch with the built files

Remember to set your environment variables in your hosting platform.

## Project Structure

```
src/
├── components/
│   ├── HikeDetails.jsx    # Main container component
│   ├── Map.jsx            # Mapbox integration
│   ├── HikeStats.jsx      # Statistics display
│   └── HikeInfo.jsx       # Detailed information
├── data/
│   └── sampleHike.js      # Hike configuration
├── utils/
│   └── gpxParser.js       # GPX file parsing
├── App.jsx                # Root component
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Troubleshooting

### Map not displaying
- Verify your Mapbox token is correctly set in `.env`
- Check browser console for errors
- Ensure GPX file path is correct and accessible

### GPX route not showing
- Verify GPX file is valid XML
- Check that the file is in the `public` directory
- Look for parsing errors in the console

### Styling issues
- Make sure you're using Tailwind CSS v4 syntax
- Check that Vite is running with the Tailwind plugin

## License

This project is open source and available under the MIT License.