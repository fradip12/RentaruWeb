<template>
  <v-text-field
    placeholder="Saya mencari..."
    background-color="tersier"
    append-icon="mdi-magnify"
    dense
    rounded
    solo
    hide-details
    flat
  >
  </v-text-field>
</template>

<script>
export default {
  name: "HeaderMainSearchBar",

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>