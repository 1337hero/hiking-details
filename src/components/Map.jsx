import React, { useEffect, useState } from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import { parseGPX } from '../utils/gpxParser';
import { USFSLayers } from '../data/usfs-layers';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

const MapComponent = ({ gpxFile, trailhead, waypoints }) => {
  const [geoJson, setGeoJson] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [showUSFSTrails, setShowUSFSTrails] = useState(true);
  const [showUSFSRaster, setShowUSFSRaster] = useState(true);
  const [mapRef, setMapRef] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: trailhead?.lng || -122.4,
    latitude: trailhead?.lat || 37.8,
    zoom: 12
  });

  useEffect(() => {
    if (gpxFile) {
      parseGPX(gpxFile).then(data => {
        setGeoJson(data);
        
        if (data && data.features && data.features.length > 0) {
          const coordinates = data.features[0].geometry.coordinates;
          if (coordinates && coordinates.length > 0) {
            // Calculate bounds for better fitting
            let minLng = Infinity, maxLng = -Infinity;
            let minLat = Infinity, maxLat = -Infinity;
            
            coordinates.forEach(([lng, lat]) => {
              minLng = Math.min(minLng, lng);
              maxLng = Math.max(maxLng, lng);
              minLat = Math.min(minLat, lat);
              maxLat = Math.max(maxLat, lat);
            });
            
            setBounds([[minLng, minLat], [maxLng, maxLat]]);
          }
        }
      });
    }
  }, [gpxFile]);

  // Update layer visibility when state changes
  useEffect(() => {
    if (mapRef) {
      const map = mapRef;
      
      // Update USFS trails visibility
      if (map.getLayer('usfs-trails-layer')) {
        map.setLayoutProperty(
          'usfs-trails-layer',
          'visibility',
          showUSFSTrails ? 'visible' : 'none'
        );
      }
      
      // Update USFS raster visibility
      if (map.getLayer('usfs-raster-layer')) {
        map.setLayoutProperty(
          'usfs-raster-layer',
          'visibility',
          showUSFSRaster ? 'visible' : 'none'
        );
      }
    }
  }, [showUSFSTrails, showUSFSRaster, mapRef]);

  // Main trail line
  const lineLayer = {
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#FF5252',
      'line-width': 4,
      'line-opacity': 0.9
    }
  };

  // Trail outline for better visibility
  const lineOutlineLayer = {
    id: 'route-outline',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#8B0000',
      'line-width': 6,
      'line-opacity': 0.4
    }
  };

  // Start point marker
  const startPointLayer = {
    id: 'start-point',
    type: 'circle',
    source: 'route-points',
    filter: ['==', ['get', 'type'], 'start'],
    paint: {
      'circle-radius': 8,
      'circle-color': '#22C55E',
      'circle-stroke-width': 3,
      'circle-stroke-color': '#ffffff'
    }
  };

  // End point marker
  const endPointLayer = {
    id: 'end-point',
    type: 'circle',
    source: 'route-points',
    filter: ['==', ['get', 'type'], 'end'],
    paint: {
      'circle-radius': 8,
      'circle-color': '#000000',
      'circle-stroke-width': 3,
      'circle-stroke-color': '#ffffff'
    }
  };

  // Create start/end points from trail data
  const routePoints = geoJson && geoJson.features && geoJson.features.length > 0 ? {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { type: 'start' },
        geometry: {
          type: 'Point',
          coordinates: geoJson.features[0].geometry.coordinates[0]
        }
      },
      {
        type: 'Feature',
        properties: { type: 'end' },
        geometry: {
          type: 'Point',
          coordinates: geoJson.features[0].geometry.coordinates[
            geoJson.features[0].geometry.coordinates.length - 1
          ]
        }
      }
    ]
  } : null;

  // Create waypoint markers
  const waypointMarkers = waypoints && waypoints.length > 0 ? {
    type: 'FeatureCollection',
    features: waypoints.map(waypoint => ({
      type: 'Feature',
      properties: { 
        name: waypoint.name,
        type: 'waypoint'
      },
      geometry: {
        type: 'Point',
        coordinates: [waypoint.lng, waypoint.lat]
      }
    }))
  } : null;

  // Waypoint layer
  const waypointLayer = {
    id: 'waypoints',
    type: 'circle',
    source: 'waypoints',
    paint: {
      'circle-radius': 6,
      'circle-color': '#3B82F6',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  };

  // Waypoint labels
  const waypointLabelLayer = {
    id: 'waypoint-labels',
    type: 'symbol',
    source: 'waypoints',
    layout: {
      'text-field': ['get', 'name'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 12,
      'text-offset': [0, 1.5],
      'text-anchor': 'top'
    },
    paint: {
      'text-color': '#1a1a1a',
      'text-halo-color': '#ffffff',
      'text-halo-width': 2
    }
  };

  // USFS trails layer styling
  const usfsTrailsLayer = {
    id: 'usfs-trails-layer',
    type: 'line',
    source: 'usfs-trails',
    paint: {
      'line-color': [
        'case',
        ['==', ['get', 'TRAIL_CLASS'], 'DEVELOPED-HEAVY USE TRAIL'],
        '#006400',  // Dark green for main trails
        ['==', ['get', 'TRAIL_CLASS'], 'DEVELOPED-MODERATE USE TRAIL'],
        '#228B22',  // Forest green for moderate trails
        '#32CD32'   // Lime green for other trails
      ],
      'line-width': [
        'case',
        ['==', ['get', 'TRAIL_CLASS'], 'DEVELOPED-HEAVY USE TRAIL'],
        3,
        2
      ],
      'line-opacity': 0.8,
      'line-dasharray': [
        'case',
        ['==', ['get', 'TRAIL_TYPE'], 'TERRA TRAIL'],
        [0, 0],  // Solid line for terra trails
        [2, 2]   // Dashed for other trails
      ]
    }
  };

  // USFS raster layer (if available)
  const usfsRasterLayer = {
    id: 'usfs-raster-layer',
    type: 'raster',
    source: 'usfs-raster',
    paint: {
      'raster-opacity': 0.5
    },
    minzoom: 5,
    maxzoom: 16
  };

  return (
    <div className="relative w-full h-full">
      <Map
      {...viewport}
      onMove={evt => setViewport(evt.viewState)}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      onLoad={(e) => {
        const map = e.target;
        setMapRef(map);
        
        // Fit bounds if available
        if (bounds) {
          map.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            duration: 1000
          });
        }
        
        // Add USFS trails data source
        map.addSource('usfs-trails', {
          type: 'geojson',
          data: USFSLayers.trails.sawtooth
        });
        
        // Add USFS raster tiles - Using CalTopo USFS layer
        map.addSource('usfs-raster', {
          type: 'raster',
          tiles: USFSLayers.rasterTiles.caltopoUSFS.tiles,
          tileSize: 256,
          attribution: USFSLayers.rasterTiles.caltopoUSFS.attribution,
          maxzoom: USFSLayers.rasterTiles.caltopoUSFS.maxZoom
        });
        
        // Add the layers
        map.addLayer({
          ...usfsRasterLayer,
          layout: {
            visibility: showUSFSRaster ? 'visible' : 'none'
          }
        }, 'route-outline');
        
        map.addLayer({
          ...usfsTrailsLayer,
          layout: {
            visibility: showUSFSTrails ? 'visible' : 'none'
          }
        }, 'route-outline');
      }}
    >
      
      {/* Trail route layers */}
      {geoJson && (
        <>
          <Source id="route" type="geojson" data={geoJson}>
            <Layer {...lineOutlineLayer} />
            <Layer {...lineLayer} />
          </Source>
          
          {/* Start and end markers */}
          {routePoints && (
            <Source id="route-points" type="geojson" data={routePoints}>
              <Layer {...startPointLayer} />
              <Layer {...endPointLayer} />
            </Source>
          )}
          
          {/* Waypoint markers */}
          {waypointMarkers && (
            <Source id="waypoints" type="geojson" data={waypointMarkers}>
              <Layer {...waypointLayer} />
              <Layer {...waypointLabelLayer} />
            </Source>
          )}
        </>
      )}
    </Map>
    </div>
  );
};

export default MapComponent;