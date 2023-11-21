<template>
  <div class="base-menu">
    <div class="base-menu-item" @click="navigateTo('/dashboard')">
      Dashboard
    </div>
    <div class="base-menu-item" @click="navigateTo('/cadastro')">
      Cadastro
    </div>
  </div>
</template>

<style lang="scss">
.base-menu {
  color: #fff;
  background-color: #4D4D4D;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #000;
  width: 100%;

  .base-menu-item {
    padding: 1.5rem;
    width: 100%;
    text-align: center;

    &:hover {
      cursor: pointer;
      background-color: #222222;
    }
  }
}
</style>