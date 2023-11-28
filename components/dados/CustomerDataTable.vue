<template>
  <div class="customer-data-table">
    <table>
      <tr>
        <th 
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
        </th>
        <th>Ações</th>
      </tr>
      <tr v-for="data in datas">
        <td>{{ data.cpf }}</td>
        <td>{{ data.nome }}</td>
        <td>{{ data.genero }}</td>
        <td>{{ data.idade }}</td>
        <td>{{ data.gasto_medio }}</td>
        <td class="options">
          <button class="sells-btn" @click="openSellPage(data, data.cpf)">Vendas</button>
          <button class="books-btn" @click="openBooksPage(data.books, data.cpf)">Livros</button>
        </td>
      </tr>
    </table>

    <DadosCustomerSellsModal
      v-if="showSellsModal"
      :modalData="modalData"
      :customerCpf="customerCpf"
      @close="showSellsModal = false"
    />

    <DadosCustomerBooksModal
      v-if="showBooksModal"
      :modalData="modalData"
      :customerCpf="customerCpf"
      @close="showBooksModal = false"
      @fetch-books="$emit('fetch-books')"
    />
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    datas: {
      type: Array,
      required: true
    }
  },

  data: function() {
    return {
      showSellsModal: false,
      showBooksModal: false,
      modalData: {},
      customerCpf: '',
    }
  },

  methods: {
    openSellPage(customerData, customerCpf) {
      if(customerData) {
        this.modalData = customerData;
        this.customerCpf = customerCpf;
        this.showSellsModal = true;
      }
    },
    openBooksPage(livros, customerCpf) {
      if(livros) {
        this.modalData = livros;
        this.customerCpf = customerCpf;
        this.showBooksModal = true;
      }
    }
  }
}
</script>

<style lang="scss">
.customer-data-table {
  overflow-x: auto;

  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #4D4D4D;
    color: #fff;
    display: flex;
    flex-direction: column;

    .show-books-create-btn {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      display: flex;
      justify-content: flex-end;
      
      .close {
        color: #aaa;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        padding: 0.5rem 1rem;
      }
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      width: 100%;
      gap: 0.5rem;
      overflow-x: auto;
    }
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    max-width: 100%;
    margin: 0 auto;
    max-width: 1200px;

    tr {
      background-color: #000;

      th {
        border: 1px solid #dddddd;
        padding: 0.5rem;
        background-color: #000;
        color: #fff;
      }

      td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 0.5rem;
        color: #fff;

        .books-btn {
          margin-top: 0.5rem;
        }
      }

      .options {
        button {
          background-color: #920505;
          color: #fff;
          border: none;
          border-radius: 0.2rem;
          padding: 0.5rem;
          cursor: pointer;
          transition: 0.2s;
          width: 100%;
        }
      }
    }

    tr:nth-child(even) {
      background-color: #0000007b;
    }
  }
}
</style>