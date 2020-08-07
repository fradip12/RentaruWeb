<template>
  <v-btn class="lowercase primary--text mx-1" :href="href" color="tersier" rounded depressed>
    {{ text }}
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
.lowercase {
  text-transform: none !important;
}
</style>