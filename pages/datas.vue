<template>
  <div class="cadastro-page">
    <h2>Dados</h2>
    <DadosCustomerDataTable
      :headers="headers"
      :datas="datas"
    />
    <BaseMenu />
  </div>
</template>

<script>
export default {
  name: 'DadosPage',
  data: function() {
    return {
      headers: [
        'ID', 'Nome', 'CPF', 'Gênero', 'Idade', 'Gasto Médio'
      ],
      datas: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "cpf": "21341242144",
          "genero": "Feminino",
          "idade": 20,
          "gasto_medio": 100,
          "livros": [
            {
              "id": 1,
              "titulo": "Harry Potter",
              "autor": "J. K. Rowling",
              "genero": "Fantasia",
              "preco": 100
            },
            {
              "id": 2,
              "titulo": "Senhor dos Anéis",
              "autor": "J. R. R. Tolkien",
              "genero": "Fantasia",
              "preco": 100
            },
            {
              "id": 3,
              "titulo": "As Crônicas de Nárnia",
              "autor": "C. S. Lewis",
              "genero": "Fantasia",
              "preco": 100
            }
          ],
          "vendas": {
            "ticket_medio": 100,
            "genero_mais_vendido": "Fantasia",
            "titulos_mais_vendidos": [
              "Harry Potter",
              "Senhor dos Anéis",
              "As Crônicas de Nárnia"
            ],
            "forma_pagamento_mais_usada": "Cartão de Crédito"
          }
        },
        {
          id: 2,
          name: "Ervin Howell",
          cpf: "21341242144",
          genero: "Masculino",
          idade: 20,
          gasto_medio: 250,
          livros: [
            {
              id: 1,
              titulo: "Orçamento Base Zero",
              autor: "Felipe Machado",
              genero: "Finanças",
              preco: 100
            },
            {
              id: 2,
              titulo: "Arquitetura Limpa",
              autor: "Robert C. Martin",
              genero: "Tecnologia",
              preco: 100
            },
            {
              id: 3,
              titulo: "Código Limpo",
              autor: "Robert C. Martin",
              genero: "Tecnologia",
              preco: 100
            }
          ],
          vendas: {
            ticket_medio: 100,
            genero_mais_vendido: "Tecnologia",
            titulos_mais_vendidos: [
              "Orçamento Base Zero",
              "Arquitetura Limpa",
              "Código Limpo"
            ],
            forma_pagamento_mais_usada: "PIX"
          }
        }
      ],
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

  h2 {
    color: #fff;
    text-align: center;
    background-color: #000;
    border: #fff solid 0.1rem;
    padding: 0.25rem;
  }
}
</style>