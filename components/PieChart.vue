<template>
  <apexchart width="500" type="pie" :options="options" :series="series"></apexchart>
</template>

<script setup>
import { apexchart } from "vue3-apexcharts";

const props = defineProps({
  options: Object,
  series: Array,
});

</script>