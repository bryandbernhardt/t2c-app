<template>
  <div class="modal">
    <div class="modal-header">
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="modal-content">
      <table>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Gênero</th>
          <th>Preço</th>
        </tr>
        <tr v-for="livro in modalData">
          <td>{{ livro.id }}</td>
          <td>{{ livro.titulo }}</td>
          <td>{{ livro.autor }}</td>
          <td>{{ livro.genero }}</td>
          <td>{{ livro.preco }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      required: true
    }
  }
}
</script>