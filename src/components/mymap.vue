<template>
  <div id="map"  class=" w-11/12 h-5/6"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoieW91c2VmLXNoYW50aTIyIiwiYSI6ImNtMHR6cnU3czA4d2EyaXNnZHgzenBqa2IifQ.M8mK4SEAG9czbPi78g39_g'; 


onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [-74.5, 40], 
    zoom: 9 
  });

  map.addControl(new mapboxgl.NavigationControl());
});
</script>


