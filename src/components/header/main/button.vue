<template>
  <v-btn class="lowercase primary--text ma-1" :href="href" color="tersier" rounded depressed>
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
.lowercased {
  text-transform: none !important;
}
.lowercase {
  text-transform: none !important;
}
</style>