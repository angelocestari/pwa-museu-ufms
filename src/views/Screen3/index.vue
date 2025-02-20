<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="d-flex align-center justify-center">
        <v-img src="src/assets/celula-eucarionte.jpg"
               max-width="80%"
               max-height="80vh"
               contain
        ></v-img>
        <v-btn icon
               class="clickable-area nucleus"
               @click="openModal('nucleus')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
      </v-container>
    </v-main>
    <v-btn size="small"
           color="red"
           text="Finalizar Apresentação"
           class="finalizar-btn"
           variant="flat"
           @click="finalizarApresentacao"
    ></v-btn>
    <CellInfoModal v-model="showModal"
                   :title="modalTitle"
                   :content="modalText"
    ></CellInfoModal>
  </v-app>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import TopBar from "@/views/components/topBar.vue";
import CellInfoModal from "@/views/Screen3/components/CellInfoModal.vue";

const organelleData = {
  nucleus: {
    title: 'Núcleo: O cérebro da célula',
    content: 'O núcleo é o centro de controle da célula eucarionte. Ele guarda o DNA e comanda tudo o que acontece dentro da célula. O núcleo é protegido por uma membrana que garante que só moléculas específicas entrem ou saiam, mantendo tudo funcionando da melhor maneira possível. '
  }
}

const showModal = ref(false);
const modalTitle = ref("");
const modalText = ref("");
const router = useRouter();

function openModal(organelleId) {
  if (organelleData[organelleId]) {
    modalTitle.value = organelleData[organelleId].title;
    modalText.value = organelleData[organelleId].content;
    showModal.value = true;
  }
}

function finalizarApresentacao() {
  router.push("/");
}

</script>

<style scoped>

.clickable-area {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
}

.nucleus {
  top: 44%;
  left: 48%;
}

.finalizar-btn{
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
