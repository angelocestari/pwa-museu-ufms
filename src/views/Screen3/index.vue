<template>
  <v-app>
    <top-bar></top-bar>
    <v-main class="d-flex align-center justify-center">
      <div class="cell-up-text">
       <h2>CliQUE NOS ALFINETES E VEJA A MAGIA ACONTECER</h2>
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

const urlCelula = new URL('@/assets/Célula com alfinetes.jpeg', import.meta.url).href

const organelleData = {
  nucleus: {
    title: 'Núcleo',
    img: new URL('@/assets/nucleo.jpeg', import.meta.url).href,
    content: 'O núcleo é o centro de controle da célula eucarionte. Ele guarda o DNA e comanda tudo o que acontece dentro da célula. O núcleo é protegido por uma membrana que garante que só moléculas específicas entrem ou saiam, mantendo tudo funcionando da melhor maneira possível. '
  },
  mitochondrias: {
    title: 'Mitocôndrias',
    img: new URL('@/assets/mitocondria.jpeg', import.meta.url).href,
    content: 'As mitocôndrias produzem a energia que a célula precisa para realizar suas atividades. Para tanto, o corpo precisa se nutrir e direcionar esses nutrientes para dentro das células onde as mitocôndrias possam converter os macronutrientes em energia.Curiosamente, as mitocôndrias têm seu próprio DNA, o que nos faz pensar que, há muito tempo, elas podem ter sido células independentes que passaram a viver dentro das células eucariontes. \n' +
        'Na realidade, Cientistas acreditam que as mitocôndrias, assim como os cloroplastos (nas células vegetais) eram bactérias que, há bilhões de anos, começaram a viver dentro de outras células. Essa parceria evoluiu e deu origem às células Eucariontes. Essa teoria é chamada de teoria Endossimbiose.\n'
  },
  ribosomes: {
    title: 'Ribossomos',
    img:  new URL('@/assets/ribossomo.jpeg', import.meta.url).href,
    content: 'Os ribossomos são pequenas estruturas responsáveis pela síntese de proteínas, que são essenciais para quase todas as funções celulares. Eles podem ser encontrados soltos no citoplasma ou aderidos ao retículo endoplasmático, formando o retículo endoplasmático rugoso'
  },
  endoplasmic_reticulum: {
    title: 'Retículo endoplasmático',
    img:  new URL('@/assets/reticulo_endoplasmatico.jpeg', import.meta.url).href,
    content: 'Sua estrutura de membranas interligadas permite o transporte de substâncias dentro da célula, funcionando como uma espécie de "rede logística" interna. Assim, o RE contribui diretamente para a manutenção e organização das atividades celulares. Ele se divide em duas formas: o retículo endoplasmático rugoso (RER), coberto por ribossomos, que participa da síntese de proteínas; e o retículo endoplasmático liso (REL), que atua na produção de lipídios, na desintoxicação celular e no armazenamento de íons cálcio.'
  },
  golgi_apparatus: {
    title: 'Complexo de Golgi',
    img: new URL('@/assets/aparelho_de_golgi.jpeg', import.meta.url).href,
    content: 'Depois de serem fabricados, as proteínas e lipídios passam pelo complexo de Golgi, que é como um centro de distribuição, onde eles serão modificados, empacotados e enviados para onde são necessários, dentro ou fora da célula. '
  },
  centrioles: {
    title: 'Centríolos',
    img: new URL('@/assets/centriolo.jpeg', import.meta.url).href,
    content: 'Os centríolos são estruturas que desempenham papel fundamental na divisão celular. Eles ajudam a organizar as fibras que puxam os cromossomos para os lados opostos da célula durante a divisão celular, para que cada célula receba o mesmo número de cromossomos. Sem os centríolos a célula teria dificuldades para dividir corretamente.'
  },
  peroxisomes: {
    title: 'Peroxissomos',
    img:  new URL('@/assets/peroxissomo.jpeg', import.meta.url).href,
    content: 'São organelas que protegem a célula das substâncias tóxicas. Eles produzem enzimas que quebram os peróxidos, que são compostos que podem ser prejudiciais, e transformam-os em substâncias inofensivas.'
  },
  lysosomes: {
    title: 'Lisossomos',
    img: new URL('@/assets/lisossomos.jpeg', import.meta.url).href,
    content: 'Os lisossomos são como centro de reciclagem celular, pois contêm enzimas que degradam materiais indesejados ou danificados, reciclando os componentes úteis e eliminando aqueles que não servem mais. Isso ajuda a manter a célula limpa e funcionando corretamente. '
  },
  vacuoles: {
    title: 'Vacúolos: Armazéns da célula',
    img: new URL('@/assets/vacuolo.jpg', import.meta.url).href,
    content: 'Nas células animais, os vacúolos não são tão grandes como nas células vegetais, mas apresentam a mesma função, armazenar substâncias, como por exemplo nutrientes para serem usados no momento oportuno.'
  },
  cytoskeleton: {
    title: 'Citoesqueleto',
    img:  new URL('@/assets/citoesqueleto.jpeg', import.meta.url).href,
    content: 'Célula tem esqueleto? Tem sim! Ele é formado por uma rede de fibras que dá suporte e forma à célula.  Além disso, é o citoesqueleto que permite que a célula se mova, mude de forma e que transporta organelas e vesículas de um local para o outro dentro da célula; Imagine o citoesqueleto como uma rede de trilhos, sobre os quais tudo na célula se move de maneira organizada.'
  },
  cytoplasmic_membrane: {
    title: 'Membrana citoplasmática',
    img: new URL('@/assets/membrana.jpeg', import.meta.url).href,
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
  color: black;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

.clickable-area-nucleus {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 32.2%;
  left: 49.7%;
}

.clickable-area-mitochondrias {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 56.8%;
  left: 37.4%;
}


.clickable-area-ribosomes{
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 26.6%;
  left: 34.8%;
}

.clickable-area-endoplasmic_reticulum{
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 49.5%;
  left: 48.7%;
}

.clickable-area-golgi_apparatus {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 37.4%;
  left: 64%;
}

.clickable-area-centrioles {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 34.5%;
  left: 32%;
}

.clickable-area-peroxisomes {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 22%;
  left: 58%;
}

.clickable-area-lysosomes {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 45%;
  left: 30.5%;
}

.clickable-area-cytoskeleton {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 42%;
  left: 34.8%;
}

.clickable-area-cytoplasmic-membrane {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  top: 72.3%;
  left: 53.8%;
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
    top: 33%;
    left: 49.8%;
  }


  .clickable-area-mitochondrias {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 58%;
    left: 38%;
  }

  .clickable-area-ribosomes{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 28%;
    left: 35.5%;
  }


  .clickable-area-endoplasmic_reticulum{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 50.1%;
    left: 49%;
  }


  .clickable-area-golgi_apparatus {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 38.5%;
    left: 63.3%;
  }

  .clickable-area-centrioles {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 35.3%;
    left: 32.9%;
  }

  .clickable-area-peroxisomes {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 23%;
    left: 57.7%;
  }

  .clickable-area-lysosomes {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 45.6%;
    left: 31.5%;
  }

  .clickable-area-cytoplasmic-membrane {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 73%;
    left: 53.7%;
  }

  .clickable-area-cytoskeleton {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    top: 42.7%;
    left: 35.6%;
  }

}

</style>
