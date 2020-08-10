<template>
  <v-carousel cycle interval="2000">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      class="top-image"
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.top-image {
  width: 100%;
  height: 23vw;
  max-height: 700px;
  object-fit: cover;
}
</style>

<script>
export default {
  name: "IklanB2B",

  props: {
    items: Array,
  },

  computed: {
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
};
</script>