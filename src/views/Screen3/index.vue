<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <div class="cell-up-text">
       <h2>Clique no alfinete para conhecer um pouco mais sobre a organela!</h2>
      </div>
      <v-container class="d-flex align-center justify-center">
        <v-img :src="urlCelula"
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
               class="clickable-area-ribosomes"
               @click="openModal('ribosomes')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-endoplasmic_reticulum"
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
               class="clickable-area-cytoskeleton"
               @click="openModal('cytoskeleton')">
          <v-icon color="transparent">
            mdi-circle
          </v-icon>
        </v-btn>
        <v-btn icon
               class="clickable-area-cytoplasmic-membrane"
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

const urlCelula = new URL('@/assets/celula_com_alfinete.jpg', import.meta.url).href

const organelleData = {
  nucleus: {
    title: 'Núcleo: O cérebro da célula',
    img: new URL('@/assets/nucleo_com_nucleolo.jpg', import.meta.url).href,
    content: 'O núcleo é o centro de controle da célula eucarionte. Ele guarda o DNA e comanda tudo o que acontece dentro da célula. O núcleo é protegido por uma membrana que garante que só moléculas específicas entrem ou saiam, mantendo tudo funcionando da melhor maneira possível. '
  },
  mitochondrias: {
    title: 'Mitocôndrias: As usinas de energia',
    img: new URL('@/assets/mitocondria.jpg', import.meta.url).href,
    content: 'As mitocôndrias produzem a energia que a célula precisa para realizar suas atividades. Para tanto, o corpo precisa se nutrir e direcionar esses nutrientes para dentro das células onde as mitocôndrias possam converter os macronutrientes em energia.Curiosamente, as mitocôndrias têm seu próprio DNA, o que nos faz pensar que, há muito tempo, elas podem ter sido células independentes que passaram a viver dentro das células eucariontes. \n' +
        'Na realidade, Cientistas acreditam que as mitocôndrias, assim como os cloroplastos (nas células vegetais) eram bactérias que, há bilhões de anos, começaram a viver dentro de outras células. Essa parceria evoluiu e deu origem às células Eucariontes. Essa teoria é chamada de teoria Endossimbiose.\n'
  },
  ribosomes: {
    title: 'Ribossomos: As fábricas de proteínas',
    img:  new URL('@/assets/ribossomo.jpg', import.meta.url).href,
    content: 'Os ribossomos são pequenas estruturas responsáveis pela síntese de proteínas, que são essenciais para quase todas as funções celulares. Eles podem ser encontrados soltos no citoplasma ou aderidos ao retículo endoplasmático, formando o retículo endoplasmático rugoso'
  },
  endoplasmic_reticulum: {
    title: 'Retículo endoplasmático: A fábrica e o transporte',
    img:  new URL('@/assets/reticulo_endoplasmatico.jpg', import.meta.url).href,
    content: 'Dentro da célula existe uma rede de túneis onde são fabricadas e transportadas proteínas e lipídios. Essa rede é o retículo endoplasmático. Ele pode ser rugoso, se estiverem cheios de ribossomos, que produzem as proteínas,  ou lisos, quando forem retículos que produzem lipídios.'
  },
  golgi_apparatus: {
    title: 'Complexo de Golgi: Centro de distribuição',
    img: new URL('@/assets/aparelho_de_golgi.jpg', import.meta.url).href,
    content: 'Depois de serem fabricados, as proteínas e lipídios passam pelo complexo de Golgi, que é como um centro de distribuição, onde eles serão modificados, empacotados e enviados para onde são necessários, dentro ou fora da célula. '
  },
  centrioles: {
    title: 'Centríolos: Organizadores da célula',
    img: new URL('@/assets/centriolo.jpg', import.meta.url).href,
    content: 'Os centríolos são estruturas que desempenham papel fundamental na divisão celular. Eles ajudam a organizar as fibras que puxam os cromossomos para os lados opostos da célula durante a divisão celular, para que cada célula receba o mesmo número de cromossomos. Sem os centríolos a célula teria dificuldades para dividir corretamente.'
  },
  peroxisomes: {
    title: 'Peroxissomos: Os detoxificadores celulares',
    img:  new URL('@/assets/peroxissomo.jpg', import.meta.url).href,
    content: 'São organelas que protegem a célula das substâncias tóxicas. Eles produzem enzimas que quebram os peróxidos, que são compostos que podem ser prejudiciais, e transformam-os em substâncias inofensivas.'
  },
  lysosomes: {
    title: 'Lisossomos: Sistema de reciclagem',
    img: new URL('@/assets/lisossomo_e_fagossomo.jpg', import.meta.url).href,
    content: 'Os lisossomos são como centro de reciclagem celular, pois contêm enzimas que degradam materiais indesejados ou danificados, reciclando os componentes úteis e eliminando aqueles que não servem mais. Isso ajuda a manter a célula limpa e funcionando corretamente. '
  },
  vacuoles: {
    title: 'Vacúolos: Armazéns da célula',
    img: new URL('@/assets/vacuolo.jpg', import.meta.url).href,
    content: 'Nas células animais, os vacúolos não são tão grandes como nas células vegetais, mas apresentam a mesma função, armazenar substâncias, como por exemplo nutrientes para serem usados no momento oportuno.'
  },
  cytoskeleton: {
    title: 'Citoesqueleto: O esqueleto da célula',
    img:  new URL('@/assets/citoesqueleto.jpg', import.meta.url).href,
    content: 'Célula tem esqueleto? Tem sim! Ele é formado por uma rede de fibras que dá suporte e forma à célula.  Além disso, é o citoesqueleto que permite que a célula se mova, mude de forma e que transporta organelas e vesículas de um local para o outro dentro da célula; Imagine o citoesqueleto como uma rede de trilhos, sobre os quais tudo na célula se move de maneira organizada.'
  },
  cytoplasmic_membrane: {
    title: 'Membrana citoplasmática: A fronteira',
    img: new URL('@/assets/membrana_celular.jpg', import.meta.url).href,
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

.cell-up-text{
  position: absolute;
  width: 100%;
  top: 10%;
  left: 25%;
}

h2{
  color: green;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

.clickable-area-nucleus {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 34.5%;
  left: 48%;
}

.clickable-area-mitochondrias {
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: -60deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 58.5%;
  left: 34.3%;
}


.clickable-area-ribosomes{
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: -130deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 27%;
  left: 36.5%;
}

.clickable-area-endoplasmic_reticulum{
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: -80deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 57%;
  left: 50%;
}

.clickable-area-golgi_apparatus {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 26.5%;
  left: 65%;
}

.clickable-area-centrioles {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 33.5%;
  left: 30%;
}

.clickable-area-peroxisomes {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 23.5%;
  left: 59.5%;
}

.clickable-area-lysosomes {
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: 45deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 47%;
  left: 31%;
}

.clickable-area-cytoskeleton {
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: -35deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 44%;
  left: 36%;
}

.clickable-area-cytoplasmic-membrane {
  position: absolute;
  width: 20px;
  height: 20px;
  rotate: -190deg;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 77.5%;
  left: 52%;
}

.finalizar-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

@media (max-width: 1334px) {

  .clickable-area-nucleus{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 32%;
    left: 47.8%;
  }


  .clickable-area-mitochondrias {
    position: absolute;
    width: 20px;
    height: 20px;
    rotate: -140deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 60%;
    left: 33%;
  }

  .clickable-area-ribosomes{
    position: absolute;
    width: 20px;
    height: 20px;
    rotate: -130deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 24%;
    left: 35%;
  }


  .clickable-area-endoplasmic_reticulum{
    position: absolute;
    width: 20px;
    height: 20px;
    rotate: -20deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 57.5%;
    left: 50%;
  }


  .clickable-area-golgi_apparatus {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 24%;
    left: 66.5%;
  }

  .clickable-area-centrioles {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 1;
    cursor: pointer;
    top: 32%;
    left: 28.5%;
  }

  .clickable-area-peroxisomes {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 20.3%;
    left: 60.5%;
  }

  .clickable-area-lysosomes {
    position: absolute;
    width: 15px;
    height: 15px;
    rotate: -30deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 47%;
    left: 29.6%;
  }

  .clickable-area-cytoplasmic-membrane {
    position: absolute;
    width: 20px;
    height: 20px;
    rotate: -190deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 81%;
    left: 52%;
  }

  .clickable-area-cytoskeleton {
    position: absolute;
    width: 15px;
    height: 15px;
    rotate: -35deg;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 43%;
    left: 34.8%;
  }

}

</style>
