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
      type: 'line',
      data: {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6'], // Customize labels
        datasets: [
          // 1. Measured Hydraulic Grade Line (head)
          {
            label: 'Measured Hydraulic Grade Line (head)',
            data: [12, 19, 13, 15, 22, 23], // Your data
            borderColor: 'rgba(75, 192, 192, 1)',
            borderDash: [5, 5], // Dashed line
            pointRadius: 0, // Hide points
            fill: false,
            tension: 0.1, // Smoothing line
          },
          // 2. Upper Design Grade Line (head_upper_threshold)
          {
            label: 'Upper Design Grade Line (head_upper_threshold)',
            data: [25, 25, 25, 25, 25, 25], // Your data
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: 'start', // Fill area below the line
            borderWidth: 1,
          },
          // 3. Lower Design Grade Line (head_lower_threshold)
          {
            label: 'Lower Design Grade Line (head_lower_threshold)',
            data: [10, 10, 10, 10, 10, 10], // Your data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: 'start', // Fill area below the line
            borderWidth: 1,
          },
          // 4. Air Valve (notVirtual)
          {
            label: 'Air Valve (notVirtual)',
            type: 'scatter',
            data: [20, 18, 17, 16, 14, 12], // Your data
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            pointStyle: 'triangle', // Triangle points
            pointRadius: 6,
          },
          // 5. Elevation (elevation)
          {
            label: 'Elevation (elevation)',
            data: [8, 10, 12, 14, 16, 18], // Your data
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            fill: true, // Fill area below the line
            borderWidth: 1,
            tension: 0.1, // Smoothing line
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
});
</script>
