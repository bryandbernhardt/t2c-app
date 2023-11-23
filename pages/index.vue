<template>
  <ion-page class="index-page">
    <ion-content class="index-content ion-padding">
      <ion-grid class="grid">
        <ion-col class="ion-justify-content-around">
          <ion-row class="ion-justify-content-center">
            <ion-img src="/t2c-logo.png" class="img" />
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-text>Seu melhor analisador de dados</ion-text>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-button
              shape="round"
              @click="navigateTo('/dashboard')"
            >
              Iniciar
            </ion-button>
          </ion-row>
        </ion-col>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonButton, IonRow, IonCol, IonImg, IonGrid, IonText } from '@ionic/vue';
</script>

<style lang="scss" scoped>
// vamos precisar aprender a estilizar com o ionic
ion-content {
  --background: #CDE5FF;
}
</style>

<style lang="scss" scoped>
ion-button {
  --background: #33A64C;
  --background-hover: #33a64cb4;
}

ion-grid {
  height: 100%;
}

ion-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

ion-img {
  width: 90%;
  max-width: 15rem;
}

ion-text {
  color: #fff;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>