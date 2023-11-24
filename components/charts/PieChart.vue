<template>
  <apexchart
    ref="chart"
    width="100%"
    height="30%"
    type="pie"
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
  }
}
</script>

<style lang="scss">
.apexcharts-legend-text {
  color: #fff !important;
}
</style>