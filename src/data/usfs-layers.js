// USFS Layer Configuration
// This file contains various USFS layer sources that can be used in the map

export const USFSLayers = {
  // USFS Trail Data - Official trail centerlines from Forest Service
  trails: {
    sawtooth: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_TrailNFSPublish_01/MapServer/0/query?where=FORESTNAME%20LIKE%20%27%25Sawtooth%25%27&outFields=*&f=geojson',
    // You can also query by specific trail names or areas
    thompsonPeakArea: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_TrailNFSPublish_01/MapServer/0/query?where=FORESTNAME%20LIKE%20%27%25Sawtooth%25%27%20AND%20(TRAIL_NAME%20LIKE%20%27%25Thompson%25%27%20OR%20TRAIL_NAME%20LIKE%20%27%25Redfish%25%27)&outFields=*&f=geojson'
  },
  
  // Various USFS Raster Tile Services
  rasterTiles: {
    // CalTopo USFS Topo (works well, includes contours and trails)
    caltopoUSFS: {
      tiles: ['https://caltopo.s3.amazonaws.com/topo/{z}/{x}/{y}.png'],
      attribution: 'USFS via CalTopo',
      maxZoom: 16
    },
    
    // USFS Motor Vehicle Use Map (MVUM)
    mvum: {
      tiles: ['https://apps.fs.usda.gov/arcx/rest/services/wo_nfs_gstc/GSTC_IVMTileCache/MapServer/tile/{z}/{y}/{x}'],
      attribution: 'USFS MVUM',
      maxZoom: 15
    },
    
    // Alternative USFS base layers (check availability)
    usfsBase: {
      tiles: ['https://apps.fs.usda.gov/arcx/rest/services/RRM/RRM_BaseMap/MapServer/tile/{z}/{y}/{x}'],
      attribution: 'USFS',
      maxZoom: 15
    }
  },
  
  // Additional data layers
  wilderness: {
    // Wilderness boundaries
    sawtoothWilderness: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_WildernessStatus_01/MapServer/0/query?where=WILDERNESSNAME%20LIKE%20%27%25Sawtooth%25%27&outFields=*&f=geojson'
  },
  
  // Recreation sites (campgrounds, trailheads, etc)
  recreation: {
    sawtoothRecSites: 'https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_RecreationSitePoint_01/MapServer/0/query?where=FORESTNAME%20LIKE%20%27%25Sawtooth%25%27&outFields=*&f=geojson'
  }
};

// Helper function to create a Mapbox source config
export const createUSFSSource = (layerType, layerKey) => {
  const layer = USFSLayers[layerType]?.[layerKey];
  
  if (!layer) return null;
  
  if (typeof layer === 'string') {
    // GeoJSON endpoint
    return {
      type: 'geojson',
      data: layer
    };
  } else if (layer.tiles) {
    // Raster tiles
    return {
      type: 'raster',
      tiles: layer.tiles,
      tileSize: 256,
      attribution: layer.attribution,
      maxzoom: layer.maxZoom || 16
    };
  }
  
  return null;
};