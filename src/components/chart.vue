<template>
  <div :class="[larg ? 'w-full h-96' : 'w-[50%] h-48']" class="relative  border rounded-md">
    <button @click="getlarg" class="absolute top-2 right-2 ">
      <IconWrapper :icon-code="larg ? 'gg:arrows-shrink-down-left' : 'gg:arrows-expand-up-right'" class="text-gray-500 size-5"></IconWrapper>
    </button>
    <canvas :id="chartId" class="w-full h-full m-2"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
import IconWrapper from './icons/icon-wrapper.vue';
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
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1,
          },
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
