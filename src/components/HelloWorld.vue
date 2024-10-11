<template>
  <div class="hello"></div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
const options = {
  series: [
    {
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices,
    },
  ],
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },

  title: {
    text: "Fundamental Analysis of Stocks",
    align: "left",
  },
  subtitle: {
    text: "Price Movements",
    align: "left",
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
