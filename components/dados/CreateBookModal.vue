<template>
  <div class="create-book">
    <div class="modal-header">
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <form id="book-form" v-on:submit.prevent="createBook">
      <p>Título: <input type="text" required v-model="titulo"></p>
      <p>Gênero: <input type="text" required v-model="genero"></p>
      <p>Páginas: <input type="number" v-model="paginas"></p>
    </form>
    <div class="create-book-btn"><button form="book-form" type="submit">CADASTRAR</button></div>
  </div>
</template>

<script>
import { bookService } from '@/services/book.service';

export default {
  name: 'CreateCustomerPage',
  data: function() {
    return {
      titulo: null,
      genero: null,
      paginas: null,
    }
  },

  props: {
    customerCpf: {
      type: String,
      required: true
    }
  },

  methods: {
    async createBook() {
      const book = {
        titulo: this.titulo,
        genero: this.genero,
        paginas: this.paginas,
        cpf_comprador: this.customerCpf,
      };

      await bookService.create(book);

      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
.create-book {
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

  .create-book-btn {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
}
</style>