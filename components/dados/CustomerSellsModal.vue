<template>
  <div class="modal">
    <div class="modal-header">
      <span class="close" @click="$emit('close')">&times;</span>
    </div>
    <div class="modal-content">
      <p>Ticket médio: {{ getTicketAverage()?.toFixed(2) || '0.00' }}</p>
      <p>Títulos mais vendidos: {{ getMostSellBooks() || '' }}</p>
      <p>Forma de pagamento: {{ getPaymentMethod() || '' }}</p>
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
  },

  methods: {
    getMostSellBooks() {
      let titlesCount = {};

      // conta a ocorrência dos títulos
      this.modalData.books?.forEach(book => {
        const title = book.titulo;
        titlesCount[title] = (titlesCount[title] || 0) + 1;
      });

      // converte para array
      let arrayTitlesCount = [];
      for (let title in titlesCount) {
        arrayTitlesCount.push({ title, count: titlesCount[title] });
      }

      // ordena o em forma crescente
      arrayTitlesCount.sort((a, b) => b.count - a.count);

      // retorna os 3 títulos mais vendidos
      return arrayTitlesCount.slice(0, 3).map(book => book.title).join(', ');
    },
    getPaymentMethod() {
      return "Crédito";
    },
    getTicketAverage() {
      return this.modalData.books?.reduce((acc, book) => acc + book.preco, 0) / this.modalData.books?.length;
    }
  }
}
</script>