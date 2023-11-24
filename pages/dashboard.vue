<template>
  <div class="dashboard-page">
    <h2>Gênero Vendido</h2>
    <ChartsPieChart :chartOptions="PieChartOptions" :series="PieChartSeries" />
    <h2>Lucro Anual {{ getYear }}</h2>
    <ChartsLineChart :chartOptions="LineChartOptions" :series="LineChartSeries" />
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
      BarChartOptions: {
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      BarChartSeries: [
        {
          name: "masculino",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
        {
          name: "feminino",
          data: [22, 69, 40, 67, 40, 55, 92, 123],
        },
      ],
      PieChartOptions: {
        labels: ["Auto-ajuda", "Técnico", "Romance", "Ficção", "Didático"],
        colors: ["#18141D", "#18141D", "#18141D", "#18141D", "#18141D"],
        legend: {
          show: false
        },
      },
      PieChartSeries: [15, 15, 20, 40, 10],
      LineChartOptions: {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#fff"],
        stroke: {
          curve: 'straight',
          width: 2,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
            style: {
              colors: '#fff',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff',
            },
          },
        },
        tooltip: {
          theme: 'dark',
        },
      },
      LineChartSeries: [{
        name: "Lucro",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
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