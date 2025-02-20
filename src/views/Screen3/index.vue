<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="d-flex align-center justify-center">
        <v-img src="src/assets/celula_eucarionte.jpg"
               max-width="80%"
               max-height="80vh"
               contain
        ></v-img>
        <v-btn icon
               class="clickable-area-nucleus"
               @click="openModal('nucleus')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-mitochondrias "
               @click="openModal('mitochondrias')">
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
                   :img-path="modalImage"
                   :content="modalText"
    ></CellInfoModal>
    <CellInfoModal v-model="showModal"
                   :title="modalTitle"
                   :img-path="modalImage"
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
    img: 'src/assets/nucleo_com_nucleolo.jpg',
    content: 'O núcleo é o centro de controle da célula eucarionte. Ele guarda o DNA e comanda tudo o que acontece dentro da célula. O núcleo é protegido por uma membrana que garante que só moléculas específicas entrem ou saiam, mantendo tudo funcionando da melhor maneira possível. '
  },
  mitochondrias: {
    title: 'Mitocôndrias: As usinas de energia',
    img: 'src/assets/mitocondria.jpg',
    content: 'As mitocôndrias produzem a energia que a célula precisa para realizar suas atividades. Curiosamente, as mitocôndrias têm seu próprio DNA, o que nos faz pensar que, há muito tempo, elas podem ter sido células independentes que passaram a viver dentro das células eucariontes. \n' +
        'Na realidade, Cientistas acreditam que as mitocôndrias, assim como os cloroplastos (nas células vegetais) eram bactérias que, há bilhões de anos, começaram a viver dentro de outras células. Essa parceria evoluiu e deu origem às células Eucariontes. Essa teoria é chamada de teoria Endossimbiose.\n'
  }
}

const showModal = ref(false);
const modalTitle = ref("");
const modalText = ref("");
const modalImage = ref("");
const router = useRouter();

function openModal(organelleId) {
  if (organelleData[organelleId]) {
    modalTitle.value = organelleData[organelleId].title;
    modalImage.value = organelleData[organelleId].img;
    modalText.value = organelleData[organelleId].content;
    showModal.value = true;
  }
}

function finalizarApresentacao() {
  router.push("/");
}

</script>

<style scoped>

.clickable-area-nucleus {
  position: absolute;
  width: 210px;
  height: 170px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 21%;
  left: 41%;
}

.clickable-area-mitochondrias {
  position: absolute;
  width: 130px;
  height: 50px;
  rotate: -60deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 58%;
  left: 60%;
}


.finalizar-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
