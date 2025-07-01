<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="mt-n4">
        <v-row class="align-center">
          <v-col cols="12" md="6">
            <v-card class="pa-6 text-center elevation-3" max-width="600px">
              <v-card-title class="text-h6 font-weight-bold">O MUNDO SECRETO DENTRO DE VOCÊ</v-card-title>
              <v-card-subtitle class="text-h6">Você é feito de ... células!!!</v-card-subtitle>
              <v-card-text class="text-body-1">
                Já parou para pensar que o nosso corpo é tipo um monte de cidadezinhas trabalhando em conjunto? Pois é! Cada uma dessas
                "cidades" é uma célula! As células eucariontes são unidades básicas da vida e estão presentes em todos os seres vivos
                mais complexos, como plantas, animais e fungos.
                <br><br>
                Diferente das células procariontes, as eucariontes têm um núcleo bem organizado, onde fica guardado o DNA - que nada mais
                é do que o manual de instruções da célula. Além disso, elas são super organizadas e têm várias partes especializadas, cada
                uma com uma função importante, todas trabalhando em sintonia para manter tudo funcionando direitinho.
                <br><br>
                Que tal a gente dar um tour dentro de uma célula? Lá dentro rola um verdadeiro mundo em minuatura! São vários "departamentos",
                chamados de organelas, cada um com sua missão para garantir que a célula continue viva e saudável. Bora conhecer algumas
                dessas estruturas incríveis?
              </v-card-text>
              <v-btn color="green"
                     variant="outlined"
                     class="px-6 py-3 rounded-lg"
                     @click="goToScreen3"
                     text="Explorar a Célula"
              ></v-btn>
            </v-card>
          </v-col>
          <v-col cols="12"
                 md="6"
                 class="d-flex justify-center">
            <v-img :src="urlCelula" max-width="700" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import TopBar from "@/views/components/topBar.vue";
import {useRouter} from "vue-router";

const router = useRouter();
const urlCelula = new URL('@/assets/Célula inicial.jpg', import.meta.url).href

function goToScreen3() {
  router.push("/screen3");
}

</script>

<style scoped>

.v-main {
  min-height: 100vh;
}

v-card {
  border-radius: 12px;
}

</style>