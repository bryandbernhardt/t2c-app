<template>
  <div>
    <div v-if="!loading" class="dashboard-page">
      <h2>Gênero Vendido</h2>
      <ChartsPieChart :chartOptions="PieChartOptions" :series="PieChartSeries" />
      <h2>Lucro Anual {{ getYear }}</h2>
      <ChartsLineChart :chartOptions="LineChartOptions" :series="LineChartSeries" />
      <BaseMenu />
    </div>
    <SpinnerLoading v-else />
    <BaseMenu />
  </div>
</template>

<script>
import { customerService } from '@/services/customer.service';

export default {
  computed: {
    getYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },

  data() {
    return {
      loading: true,
      PieChartOptions: {
        labels: [],
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        },
        colors: ["#18141D", "#18141D", "#18141D", "#18141D", "#18141D"],
        legend: {
          show: false
        },
      },
      PieChartSeries: [],
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

  mounted() {
    this.getGenres()
  },

  methods: {
    async getGenres() {
      this.loading = true;
      const customers = await customerService.getAll();
      const genres = [];



      customers.forEach(customer => {
        customer.books.forEach(book => {
          genres.push({ genero: book.genero, count: 0 });
          genres.find(genre => genre.genero === book.genero).count++;
        })
      });

      genres.filter((genre, i) => genres.indexOf(genre) === i);

      this.PieChartOptions.labels = genres.map(genre => genre.genero);
      this.PieChartSeries = genres.map(genre => genre.count);

      this.loading = false;
    },
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