<template>
  <v-dialog v-model="isOpen"
            max-width="600"
            transition="dialog-bottom-transition">
    <v-card class="pa-4 rounded-lg">
      <v-card-title class="text-h5 font-weight-bold text-center">
        {{ title }}
      </v-card-title>
      <div class="d-flex justify-center my-3">
        <v-img :src="imgPath"
               class="rounded-img"
               max-width="300"
               contain
               alt="Imagem"
        ></v-img>
      </div>
      <v-card-text class="text-justify text-body-1">
        {{ content }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="#0088B7"
               variant="elevated"
               class="text-body-1 font-weight-bold rounded-lg px-4 py-2"
               @click="closeModal"
               text="FECHAR"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  title: String,
  imgPath: String,
  content: String,
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});

function closeModal() {
  isOpen.value = false;
}

</script>

<style scoped>

</style>