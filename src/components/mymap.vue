<template>
    <div id="map" class="w-full h-screen"></div>
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
      const loadGeoJsonLayer = (data, sourceName, layerType, paintOptions) => {
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
  
        // Add the layer with paint options
        map.value.addLayer({
          id: sourceName,
          type: layerType,
          source: sourceName,
          layout: {},
          paint: paintOptions,
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
          // Load the first GeoJSON file
          loadGeoJsonLayer(
            pipesLayout,
            'pipes-layout',
            'line',
            {
              'line-color': '#FF5733',
              'line-width': 2,
            }
          );
  
          // Load the second GeoJSON file
          loadGeoJsonLayer(
            waterPipes,
            'water-pipes',
            'line',
            {
              'line-color': '#33FF57',
              'line-width': 2,
            }
          );
  
          // Load the third GeoJSON file for circle points (leak hotspots)
          loadGeoJsonLayer(
            leakHotspots,
            'leak-hotspots',
            'circle',
            {
              'circle-radius': 5,
              'circle-color': '#FF33A1',
            }
          );
  
          // Load the fourth GeoJSON file for polygons (pressure meters)
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
    height: 100vh; /* Fullscreen map */
  }
  </style>
  