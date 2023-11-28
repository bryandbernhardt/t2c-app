<template>
  <div class="modal">
    <div class="modal-header">
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="show-books-create-btn">
      <button class="create-button" @click="this.showBooksCreate = true">CADASTRAR</button>
    </div>
    <div class="modal-content">
      <table>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Gênero</th>
          <th>Páginas</th>
        </tr>
        <tr v-for="livro in modalData">
          <td>{{ livro.id }}</td>
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.genero }}</td>
          <td>{{ livro.paginas }}</td>
        </tr>
      </table>
    </div>
    <DadosCreateBookModal
      v-if="showBooksCreate"
      :customerCpf="customerCpf"
      @close="showBooksCreate = false; $emit('fetch-books')"
    />
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      required: true
    },
    customerCpf: {
      type: String,
      required: true
    }
  },

  data: function() {
    return {
      showBooksCreate: false,
    }
  },
}
</script>

<style lang="scss">
.create-book {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #4D4D4D;
}
</style>