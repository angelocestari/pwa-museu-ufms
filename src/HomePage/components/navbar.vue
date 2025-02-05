<template>
  <v-app-bar color="#0088B7">
    <v-btn variant="elevated"
           class="ml-5"
           text="SOBRE"
           color="#0088B7"
           @click="$emit('open-modal')"
    ></v-btn>
    <v-toolbar-title class="text-center w-100">
      UNIVERSIDADE FEDERAL DE MATO GROSSO DO SUL
    </v-toolbar-title>
    <v-img src="src/assets/logo_ufms.svg" max-width="100" class="mr-4"></v-img>
  </v-app-bar>
</template>

<script setup>

defineEmits(["open-modal"]);

</script>