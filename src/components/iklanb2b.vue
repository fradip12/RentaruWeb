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
.container-relative {
  position: relative;
}

.top-image {
  width: 100%;
  height: 23vw;
  max-height: 700px;
  object-fit: cover;
}

.top-text {
  position: absolute;
  bottom: 6px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 20px 40px;
}

.top-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  flex-direction: row;
}

@media screen and (max-width: 1264px) {
  .top-text {
    padding: 10px 20px;
  }
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