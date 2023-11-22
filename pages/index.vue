<template>
  <IonPage class="index-page">
    <IonContent class="index-content">
      <img src="/t2c-logo.png"  />
      <p>Seu melhor analisador de dados</p>
      <IonButton @click="navigateTo('/dashboard')">Iniciar</IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { IonPage, IonContent, IonButton } from '@ionic/vue';
</script>

<style lang="scss" scoped>
// vamos precisar aprender a estilizar com o ionic
ion-content {
  --background: #CDE5FF;
}
</style>

<style lang="scss">
// se tentar estilizar normal por aqui, o css padrão do ionic vai sobrescrever
.index-page {

  .index-content {

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
}
</style>