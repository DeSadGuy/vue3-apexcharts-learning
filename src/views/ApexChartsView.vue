<script setup lang="ts">
// This File will be written in Composition API SFC style

// `defineProps` is a compile macro and no longer needs to be imported
import { onMounted, ref, watch } from "vue";
import apexchart from "vue3-apexcharts";

// Chart reference
const chartRef = ref();

// Initialize chart options and series
const chartOptions = ref({
  chart: {
    id: "apexchart-example",
    type: "area",
    animation: {
      enabled: false,
    },
  },

  xaxis: {
    type: "datetime",
    labels: {
      show: true,
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "HH:mm",
      },
    },
  },
  title: {
    text: "Title",
    align: "left",
  },
  subtitle: {
    text: "Subtitle",
    align: "left",
  },
  //adding a grid
  grid: {
    show: true,
  },
  //Tooltip
  tooltip: {
    enabled: true,
    followCursor: true,
    x: {
      show: true,
      format: "yyyy/MM/dd",
    },
    marker: {
      show: true,
    },
    items: {
      display: "flex",
    },
  },

  dataLabels: {
    enabled: false,
  },
});

const series = ref([
  {
    data: generateData(30),
  },
]);

function generateData(
  count: number,
  fromThisDate: Date = new Date("2024-01-01")
): [number, number][] {
  const data: [number, number][] = [];
  let currentDate = fromThisDate.getTime();

  for (let i = 0; i < count; i++) {
    const value = Math.floor(Math.random() * 100);
    data.push([currentDate, value]);
    currentDate += 86400000; // Increment by one day in milliseconds
  }

  return data;
}
</script>

<template>
  <div class="chart-container">
    <apexchart
      width="100%"
      height="100%"
      ref="chartRef"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<style scoped>
.text {
  padding: 12px;
}

.text.has-header {
  padding: 0 12px;
}

.chart-container {
  display: grid;
  width: 100%;
  height: 100%;
}
</style>
