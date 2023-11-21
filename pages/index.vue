<template>
  <div class="index-page">
    <img src="/t2c-logo.png"  />
    <p>Seu melhor analisador de dados</p>
    <button @click="navigateTo('/dashboard')">Iniciar</button>
  </div>
</template>

<style lang="scss">
.index-page {
  background-color: #CDE5FF;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 90%;
    max-width: 15rem;
  }

  p {
    color: #fff;
    background-color: #000;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
  }

  button {
    color: #fff;
    border: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    background-color: #33A64D;
  }
}
</style>