<template>
  <div class="dashboard-page">
    <h2>Gênero Vendido</h2>
    <apexchart
      ref="chart"
      height="30%"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <h2>Lucro Anual {{ getYear }}</h2>
    <BaseMenu />
  </div>
</template>

<script>
export default {
  computed: {
    getYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },

  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "masculino",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "feminino",
          data: [22, 69, 40, 67, 40, 55, 92, 123],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.dashboard-page {
  background-color: #4D4D4D;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: 100vh;

  h2 {
    color: #fff;
    text-align: center;
    background-color: #000;
    border: #fff solid 0.1rem;
    padding: 0.25rem;
  }
}
</style>