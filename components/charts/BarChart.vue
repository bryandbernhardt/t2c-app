<template>
  <apexchart
    height="30%"
    type="bar"
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