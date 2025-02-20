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
               class="clickable-area-mitochondrias"
               @click="openModal('mitochondrias')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-golgi_apparatus"
               @click="openModal('golgi_apparatus')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-centrioles"
               @click="openModal('centrioles')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-peroxisomes"
               @click="openModal('peroxisomes')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-lysosomes"
               @click="openModal('lysosomes')">
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
  },
  ribosomes: {
    title: 'Ribossomos: As fábricas de proteínas',
    img: 'src/assets/ribossomo.jpg',
    content: 'Os ribossomos são pequenas estruturas responsáveis pela síntese de proteínas, que são essenciais para quase todas as funções celulares. Eles podem ser encontrados soltos no citoplasma ou aderidos ao retículo endoplasmático, formando o retículo endoplasmático rugoso'
  },
  endoplasmic_reticulum: {
    title: 'Retículo endoplasmático: A fábrica e o transporte',
    img: 'src/assets/reticulo_endoplasmatico.jpg',
    content: 'Dentro da célula existe uma rede de túneis onde são fabricadas e transportadas proteínas e lipídios. Essa rede é o retículo endoplasmático. Ele pode ser rugoso, se estiverem cheios de ribossomos, que produzem as proteínas,  ou lisos, quando forem retículos que produzem lipídios.'
  },
  golgi_apparatus:{
    title: 'Complexo de Golgi: Centro de distribuição',
    img: 'src/assets/aparelho_de_golgi.jpg',
    content: 'Depois de serem fabricados, as proteínas e lipídios passam pelo complexo de Golgi, que é como um centro de distribuição, onde eles serão modificados, empacotados e enviados para onde são necessários, dentro ou fora da célula. '
  },
  centrioles: {
    title: 'Centríolos: Organizadores da célula',
    img: 'src/assets/centriolo.jpg',
    content: 'Os centríolos são estruturas que desempenham papel fundamental na divisão celular. Eles ajudam a organizar as fibras que puxam os cromossomos para os lados opostos da célula durante a divisão celular, para que cada célula receba o mesmo número de cromossomos. Sem os centríolos a célula teria dificuldades para dividir corretamente.'
  },
  peroxisomes: {
    title: 'Peroxissomos: Os detoxificadores celulares',
    img: 'src/assets/peroxissomo.jpg',
    content: 'São organelas que protegem a célula das substâncias tóxicas. Eles produzem enzimas que quebram os peróxidos, que são compostos que podem ser prejudiciais, e transformam-os em substâncias inofensivas.'
  },
  lysosomes:{
    title: 'Lisossomos: Sistema de reciclagem',
    img: 'src/assets/lisossomo_e_fagossomo.jpg',
    content: 'Os lisossomos são como centro de reciclagem celular, pois contêm enzimas que degradam materiais indesejados ou danificados, reciclando os componentes úteis e eliminando aqueles que não servem mais. Isso ajuda a manter a célula limpa e funcionando corretamente. '
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

.clickable-area-golgi_apparatus {
  position: absolute;
  width: 160px;
  height: 150px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 28%;
  left: 63%;
}

.clickable-area-centrioles {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 28%;
  left: 32%;
}

.clickable-area-peroxisomes {
  position: absolute;
  width: 45px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 22%;
  left: 59%;
}

.clickable-area-lysosomes {
  position: absolute;
  width: 90px;
  height: 60px;
  rotate: -45deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 43%;
  left: 26%;
}

.finalizar-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
