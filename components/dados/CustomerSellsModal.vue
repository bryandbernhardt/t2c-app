<template>
  <div class="modal">
    <div class="modal-header">
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="modal-content">
      <p>Ticket médio: {{ modalData.ticket_medio }}</p>
      <p>Gênero mais vendido: {{ modalData.genero_mais_vendido }}</p>
      <p>Títulos mais vendidos: {{ modalData.titulos_mais_vendidos?.join(', ') }}</p>
      <p>Forma de pagamento: {{ modalData.forma_pagamento_mais_usada }}</p>
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