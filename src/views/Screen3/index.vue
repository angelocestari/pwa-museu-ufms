<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container class="d-flex align-center justify-center">
        <v-img src="src/assets/celula_eucarionte_atualizada.jpg"
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
               class="clickable-area-mitochondrias1"
               @click="openModal('mitochondrias')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-mitochondrias2"
               @click="openModal('mitochondrias')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-ribosomes1"
               @click="openModal('ribosomes')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-ribosomes2"
               @click="openModal('ribosomes')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-endoplasmic_reticulum1"
               @click="openModal('endoplasmic_reticulum')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-endoplasmic_reticulum2"
               @click="openModal('endoplasmic_reticulum')">
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
        <v-btn icon
               class="clickable-area-vacuoles"
               @click="openModal('vacuoles')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoskeleton1"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoskeleton2"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoskeleton3"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoskeleton4"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoskeleton5"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoplasmic-membrane1"
               @click="openModal('cytoplasmic_membrane')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoplasmic-membrane2"
               @click="openModal('cytoplasmic_membrane')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
      </v-container>
    </v-main>
    <v-btn size="small"
           color="#0088B7"
           text="Finalizar"
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
  golgi_apparatus: {
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
  lysosomes: {
    title: 'Lisossomos: Sistema de reciclagem',
    img: 'src/assets/lisossomo_e_fagossomo.jpg',
    content: 'Os lisossomos são como centro de reciclagem celular, pois contêm enzimas que degradam materiais indesejados ou danificados, reciclando os componentes úteis e eliminando aqueles que não servem mais. Isso ajuda a manter a célula limpa e funcionando corretamente. '
  },
  vacuoles: {
    title: 'Vacúolos: Armazéns da célula',
    img: 'src/assets/vacuolo.jpg',
    content: 'Nas células animais, os vacúolos não são tão grandes como nas células vegetais, mas apresentam a mesma função, armazenar substâncias, como por exemplo nutrientes para serem usados no momento oportuno.'
  },
  cytoskeleton: {
    title: 'Citoesqueleto: O esqueleto da célula',
    img: 'src/assets/citoesqueleto.jpg',
    content: 'Célula tem esqueleto? Tem sim! Ele é formado por uma rede de fibras que dá suporte e forma à célula.  Além disso, é o citoesqueleto que permite que a célula se mova, mude de forma e que transporta organelas e vesículas de um local para o outro dentro da célula; Imagine o citoesqueleto como uma rede de trilhos, sobre os quais tudo na célula se move de maneira organizada.'
  },
  cytoplasmic_membrane: {
    title: 'Membrana citoplasmática: A fronteira',
    img: 'src/assets/membrana_celular.jpg',
    content: 'A membrana citoplasmática é a “pele” da célula, protegendo-a e controlando o que entra e o que sai. Ela é feita de duas camadas de lipídios e proteínas que permitem a comunicação da célula com o ambiente ao seu redor, recebendo sinais e interagindo às mudanças externas.'
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
  top: 25%;
  left: 44%;
}

.clickable-area-mitochondrias1 {
  position: absolute;
  width: 80px;
  height: 35px;
  rotate: -60deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 57%;
  left: 60.5%;
}

.clickable-area-mitochondrias2 {
  position: absolute;
  width: 120px;
  height: 80px;
  rotate: -130deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 54%;
  left: 33%;
}

.clickable-area-ribosomes1{
  position: absolute;
  width: 25px;
  height: 25px;
  rotate: -130deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 42%;
  left: 35.5%;
}

.clickable-area-ribosomes2{
  position: absolute;
  width: 25px;
  height: 25px;
  rotate: -130deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 46%;
  left: 36%;
}

.clickable-area-endoplasmic_reticulum1{
  position: absolute;
  width: 250px;
  height: 140px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 49%;
  left: 42%;
}

.clickable-area-endoplasmic_reticulum2{
  position: absolute;
  width: 100px;
  height: 70px;
  rotate: -80deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 40%;
  left: 38.5%;
}

.clickable-area-golgi_apparatus {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 31%;
  left: 62%;
}

.clickable-area-centrioles {
  position: absolute;
  width: 70px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 30%;
  left: 33%;
}

.clickable-area-peroxisomes {
  position: absolute;
  width: 45px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 25%;
  left: 58%;
}

.clickable-area-lysosomes {
  position: absolute;
  width: 60px;
  height: 65px;
  rotate: 45deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 44%;
  left: 29.5%;
}

.clickable-area-vacuoles {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 25%;
  left: 41%;
}

.clickable-area-cytoskeleton1 {
  position: absolute;
  width: 110px;
  height: 10px;
  rotate: -35deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 34%;
  left: 36%;
}

.clickable-area-cytoskeleton2 {
  position: absolute;
  width: 120px;
  height: 10px;
  rotate: -75deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 37%;
  left: 35%;
}

.clickable-area-cytoskeleton3{
  position: absolute;
  width: 130px;
  height: 10px;
  rotate: -65deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 41%;
  left: 23.5%;
}

.clickable-area-cytoskeleton4{
  position: absolute;
  width: 140px;
  height: 10px;
  rotate: 48deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 58%;
  left: 25%;
}

.clickable-area-cytoskeleton5{
  position: absolute;
  width: 60px;
  height: 10px;
  rotate: -45deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 68%;
  left: 58%;
}

.clickable-area-cytoplasmic-membrane1 {
  position: absolute;
  width: 300px;
  height: 60px;
  rotate: -190deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 75%;
  left: 46%;
}

.clickable-area-cytoplasmic-membrane2 {
  position: absolute;
  width: 150px;
  height: 35px;
  rotate: 145deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 66%;
  left: 65%;
}

.finalizar-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media (max-width: 1334px) {

  .clickable-area-nucleus{
    position: absolute;
    width: 190px;
    height: 150px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 22%;
    left: 44%;
  }

  .clickable-area-mitochondrias1 {
    position: absolute;
    width: 100px;
    height: 35px;
    rotate: -55deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 57%;
    left: 60.5%;
  }

  .clickable-area-mitochondrias2 {
    position: absolute;
    width: 100px;
    height: 50px;
    rotate: -140deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 56%;
    left: 33%;
  }

  .clickable-area-ribosomes1{
    position: absolute;
    width: 25px;
    height: 25px;
    rotate: -130deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 41%;
    left: 34%;
  }

  .clickable-area-ribosomes2{
    position: absolute;
    width: 25px;
    height: 25px;
    rotate: -130deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 46%;
    left: 35%;
  }

  .clickable-area-endoplasmic_reticulum1{
    position: absolute;
    width: 270px;
    height: 130px;
    rotate: -20deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 49%;
    left: 42%;
  }

  .clickable-area-endoplasmic_reticulum2{
    position: absolute;
    width: 100px;
    height: 65px;
    rotate: -80deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 40%;
    left: 38%;
  }

  .clickable-area-golgi_apparatus {
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 30%;
    left: 63%;
  }

  .clickable-area-centrioles {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 28%;
    left: 33%;
  }

  .clickable-area-peroxisomes {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 22%;
    left: 59%;
  }

  .clickable-area-lysosomes {
    position: absolute;
    width: 60px;
    height: 50px;
    rotate: -30deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 44%;
    left: 28%;
  }

  .clickable-area-vacuoles {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 22%;
    left: 40.5%;
  }

  .clickable-area-cytoskeleton1 {
    position: absolute;
    width: 110px;
    height: 10px;
    rotate: -35deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 30%;
    left: 36%;
  }

  .clickable-area-cytoskeleton2 {
    position: absolute;
    width: 120px;
    height: 10px;
    rotate: -75deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 37%;
    left: 34%;
  }

  .clickable-area-cytoskeleton3{
    position: absolute;
    width: 130px;
    height: 10px;
    rotate: -60deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 39%;
    left: 22%;
  }

  .clickable-area-cytoskeleton4{
    position: absolute;
    width: 140px;
    height: 10px;
    rotate: 48deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 61%;
    left: 24.5%;
  }

  .clickable-area-cytoskeleton5{
    position: absolute;
    width: 60px;
    height: 10px;
    rotate: -45deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 71%;
    left: 59%;
  }

  .clickable-area-cytoplasmic-membrane1 {
    position: absolute;
    width: 300px;
    height: 60px;
    rotate: -190deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 78%;
    left: 46%;
  }

  .clickable-area-cytoplasmic-membrane2 {
    position: absolute;
    width: 150px;
    height: 35px;
    rotate: 140deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 70%;
    left: 65%;
  }

}

</style>
