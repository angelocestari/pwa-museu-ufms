<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="mt-n4">
        <v-row class="align-center">
          <v-col cols="12" md="6">
            <v-card class="pa-6 text-center elevation-3" max-width="500px">
              <v-card-title class="text-h4 font-weight-bold">A Fábrica da Vida</v-card-title>
              <v-card-subtitle class="text-h6 mt-3">Você é feito de ... Células!!!</v-card-subtitle>
              <v-card-text class="text-body-1 mt-4">
                Já imaginou que o nosso corpo é como uma cidade cheia de “mini fábricas” trabalhando juntas? Cada uma
                dessas fábricas é uma célula! As células eucariontes são as unidades básicas da vida, presentes em todos
                os seres vivos complexos, como plantas, animais e fungos. Diferentes das células procariontes, as
                eucariontes têm o núcleo bem definido, onde fica o DNA, que é como o manual de instruções das células.
                As células são organizadas e têm várias partes especializadas que trabalham em harmonia para manter a
                vida.
                <br><br>
                Vamos dar um passeio por dentro de uma célula? Lá, existe um mundo em miniatura, onde várias máquinas
                chamadas organelas trabalham para manter a vida. Vamos conhecer algumas dessas estruturas fascinantes!
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
            <v-img src="src/assets/celula-eucarionte.jpg" max-width="500" contain></v-img>
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