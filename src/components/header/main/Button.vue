<template>
  <v-btn class="lowercased primary--text" :href="href" color="tersier" rounded depressed>
    {{text}}
  </v-btn>
</template>

<script>
export default {
  name: 'HeaderMainButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style scoped>
  .lowercased {
    text-transform: none !important;
  }
</style>