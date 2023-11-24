<template>
  <apexchart
    class="line-chart"
    height="30%"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  props: {
    chartOptions: {
      type: Object,
      required: true
    },
    series: {
      type: Array,
      required: true
    }
  },
};
</script>

<style lang="scss">
.line-chart {
  background-color: #18141D;
}

.apexcharts-xaxis-label {
  color: #fff !important;
}
</style>