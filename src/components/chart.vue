<template>
  <canvas :id="chartId" class="w-full h-full m-2"></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const larg = ref(false); // Tracks whether the chart is large or not
const getlarg = () => {
  larg.value = !larg.value; // Toggle chart size
};

const chartId = ref(`myChart-${Math.random().toString(36).substr(2, 9)}`); // Unique chart ID

onMounted(() => {
  const ctx = document.getElementById(chartId.value) as HTMLCanvasElement;
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6'], // Customize labels
        datasets: [
          
          {
            label: 'Measured Hydraulic Grade Line (head)',
            data: [-12, -19, 13, 15, 22, 23], // Your data
            borderColor: 'rgba(75, 192, 192, 1)',
             // Dashed line
        // Hide points
            
             // Smoothing line
          },
          // 2. Upper Design Grade Line (head_upper_threshold)
          {
            label: 'Upper Design Grade Line (head_upper_threshold)',
            data: [24, 23, 22, 21, 20, 25], // Your data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 2)',
             // Fill area below the line
            borderWidth: 1,
          },
          // 3. Lower Design Grade Line (head_lower_threshold)
          {
            label: 'Lower Design Grade Line (head_lower_threshold)',
            data: [-3, -6, -16, 13, 11, 10], // Your data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 2)',
            // Fill area below the line
            borderWidth: 1,
          },
          // 4. Air Valve (notVirtual)
          {
            label: 'Air Valve (notVirtual)',
            type: 'bar',
            data: [20, 18, 17, 16, 14, 12], // Your data
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 5)',
            pointStyle: 'triangle', // Triangle points
            
          },
          // 5. Elevation (elevation)
          {
            label: 'Elevation (elevation)',
            data: [-8, 10, 12, 14, 16, 18], // Your data
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 5)',
            
          }
        ],
      },
      options: {
        scales: {
          y: {
            stacked: true,
          },
          x: {
            stacked: true,
          },
        },
      },
    });
  }
});
</script>
