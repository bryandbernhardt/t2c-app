<template>
  <div>
    <div v-if="!loading" class="cadastro-page">
      <h2>Dados</h2>
      <button class="create-button" @click="openCreateCustomer">CADASTRAR</button>
      <DadosCustomerDataTable
        :headers="headers"
        :datas="datas"
        @fetch-books="fetchCustomers"
      />
    </div>
    <SpinnerLoading v-else/>
    <BaseMenu />
  </div>
</template>

<script>
import { customerService } from '@/services/customer.service';

export default {
  name: 'DadosPage',
  data: function() {
    return {
      loading: true,
      headers: [
        'CPF', 'Nome', 'Gênero', 'Idade', 'Gasto Médio'
      ],
      datas: [],
    }
  },

  async mounted() {
    await this.fetchCustomers();
  },

  methods: {
    async fetchCustomers() {
      this.loading = true;
      this.datas = await customerService.getAll();
      this.loading = false;
    },

    openCreateCustomer() {
      this.$router.push({ path: '/create-customer' });
    }
  }
}
</script>

<style lang="scss">
.cadastro-page {
  background-color: #4D4D4D;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: 100vh;

  .create-button {
    padding: 0.5rem 1rem;
  }

  h2 {
    color: #fff;
    text-align: center;
    background-color: #000;
    border: #fff solid 0.1rem;
    padding: 0.25rem;
  }
}
</style>