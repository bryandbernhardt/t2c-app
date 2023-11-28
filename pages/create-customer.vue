<template>
  <div class="create-customer">
    <div class="modal-header">
      <span class="close" @click="close">&times;</span>
    </div>
    <form id="customer-form" v-on:submit.prevent="createCustomer">
      <p>CPF: <input type="cpf" required v-model="cpf"></p>
      <p>Nome: <input type="text" required v-model="name"></p>
      <p>Gênero: <input type="text" required v-model="genero"></p>
      <p>Idade: <input type="number" required v-model="idade"></p>
    </form>
    <div class="btn-container"><button form="customer-form" type="submit">CADASTRAR</button></div>
  </div>
</template>

<script>
import { customerService } from '@/services/customer.service';

export default {
  name: 'CreateCustomerPage',
  data: function() {
    return {
      cpf: null,
      name: null,
      genero: null,
      idade: null,
      gastoMedio: null,
    }
  },

  methods: {
    async createCustomer() {
      const customer = {
        cpf: this.cpf,
        nome: this.name,
        genero: this.genero,
        idade: this.idade,
        gasto_medio: this.gastoMedio,
      };

      await customerService.create(customer);

      this.$router.push({ path: '/datas' });
    },
    close() {
      this.$router.push({ path: '/datas' });
    }
  }
}
</script>

<style lang="scss">
.create-customer {
  color: #fff;
  background-color: #4D4D4D;
  gap: 1rem;
  height: 100vh;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  .modal-header {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    .close {
      color: #aaa;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      padding: 0.5rem 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 0 1rem;
  }

  h2 {
    color: #fff;
    text-align: center;
    margin: 0;
  }

  input {
    width: 100%;
    color: #000;
  }

  button {
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
  }

  .btn-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
}
</style>