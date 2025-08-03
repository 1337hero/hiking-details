import { gpx } from '@mapbox/togeojson';

export const parseGPX = async (gpxFile) => {
  try {
    let gpxText;
    
    if (typeof gpxFile === 'string') {
      if (gpxFile.startsWith('http')) {
        const response = await fetch(gpxFile);
        gpxText = await response.text();
      } else {
        const response = await fetch(gpxFile);
        gpxText = await response.text();
      }
    } else if (gpxFile instanceof File) {
      gpxText = await gpxFile.text();
    }

    const parser = new DOMParser();
    const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
    const geoJson = gpx(gpxDoc);
    
    return geoJson;
  } catch (error) {
    console.error('Error parsing GPX file:', error);
    return null;
  }
};