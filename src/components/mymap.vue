<template>
    <div id="map" class="w-full h-full"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import mapboxgl from 'mapbox-gl';
  
  // Import the GeoJSON files
  import pipesLayout from '@/assets/map.json';
  import waterPipes from '@/assets/map (1).json';
  import leakHotspots from '@/assets/map (2).json';
  import pressureMeters from '@/assets/map (3).json';
  
  export default {
    name: 'MapboxMap',
    setup() {
      const map = ref(null);
  
      mapboxgl.accessToken = 'pk.eyJ1IjoieW91c2VmLXNoYW50aTIyIiwiYSI6ImNtMHR6cnU3czA4d2EyaXNnZHgzenBqa2IifQ.M8mK4SEAG9czbPi78g39_g';
  
      // Function to load GeoJSON data
      const loadGeoJsonLayer = (data, sourceName, layerType, paintOptions, beforeLayer = null) => {
        if (!map.value) return;
  
        // Check if the source already exists and remove if necessary
        if (map.value.getSource(sourceName)) {
          map.value.removeLayer(sourceName);
          map.value.removeSource(sourceName);
        }
  
        // Add GeoJSON source
        map.value.addSource(sourceName, {
          type: 'geojson',
          data: data,
        });
  
        // Add the layer with paint options, before specified layer if provided
        map.value.addLayer({
          id: sourceName,
          type: layerType,
          source: sourceName,
          layout: {},
          paint: paintOptions,
        }, 
        beforeLayer);
      };
  
      const addPopupToLayer = (layerId, mapInstance) => {
        mapInstance.on('click', layerId, (e) => {
          // Check if the clicked feature exists
          const features = e.features;
          if (!features || !features.length) return;
  
          const feature = features[0];
          const coordinates = feature.geometry.coordinates.slice(); // Ensure deep copy
  
          // Adjust coordinates for longitudes crossing the 180th meridian
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
  
          // Create a new popup
          new mapboxgl.Popup({
            closeButton: true, // Show close button
            closeOnClick: false, // Keep the popup open on click
            anchor: 'center', // Position popup in the center of the circle
            offset: [0, -10], // Offset popup slightly above the circle
          })
            .setLngLat(coordinates) // Set popup to the circle's location
            .setHTML(`
              <div class="p-2 bg-white rounded-lg shadow-lg popup-custom">
                <strong>Leak Hotspot</strong><br>
                <em>ID:</em> ${feature.id}<br>
                <em>Coordinates:</em> ${e.lngLat.lng.toFixed(5)}, ${e.lngLat.lat.toFixed(5)}
              </div>
            `)
            .addTo(mapInstance);
        });
  
        // Change cursor to pointer when hovering over the circle points
        mapInstance.on('mouseenter', layerId, () => {
          mapInstance.getCanvas().style.cursor = 'pointer';
        });
  
        // Reset cursor when not hovering
        mapInstance.on('mouseleave', layerId, () => {
          mapInstance.getCanvas().style.cursor = '';
        });
      };
  
      onMounted(() => {
        map.value = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [0, 0],
          zoom: 2,
        });
  
        map.value.on('load', () => {
          // Load the pipes layout layer
          loadGeoJsonLayer(
            pipesLayout,
            'pipes-layout',
            'line',
            {
              'line-color': '#FF5733',
              'line-width': 2,
            }
          );
  
          // Load the water pipes layer
          loadGeoJsonLayer(
            waterPipes,
            'water-pipes',
            'line',
            {
              'line-color': '#33FF57',
              'line-width': 2,
            },
            'pipes-layout' // Ensure water-pipes layer is added above pipes-layout
          );
  
          // Load the leak hotspots layer (with circles)
          loadGeoJsonLayer(
            leakHotspots,
            'leak-hotspots',
            'circle',
            {
              'circle-radius': 8,  // Increased circle radius for better visibility
              'circle-color': '#FF33A1',
            },
            'water-pipes' // Add the circle layer above water-pipes
          );
  
          // Add popup interaction for leak hotspots layer
          addPopupToLayer('leak-hotspots', map.value);
  
          // Load the pressure meters layer (polygons)
          loadGeoJsonLayer(
            pressureMeters,
            'pressure-meters',
            'fill',
            {
              'fill-color': '#3357FF',
              'fill-opacity': 0.6,
            }
          );
        });
      });
  
      return {
        map,
      };
    },
  };
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 100vh; /* Ensure the map takes up the full viewport height */
  }
  
  .popup-custom {
    max-width: 200px;
    padding: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  </style>
  