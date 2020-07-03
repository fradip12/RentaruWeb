<template>
  <v-container
    class="container-relative d-flex justify-center"
    style="width: 300px;"
  >
    <v-icon :size="width <= 600 ? 120 : 250" color="rgba(0,0,0,0.3)">{{
      iconName
    }}</v-icon>
    <div class="stats-center">
      <div class="white--text text-sm-h2 text-h3 ">{{ statsNumber }}</div>
      <div class="white--text text-sm-h4 text-h5 mt-sm-10 ">
        {{ statsTitle }}
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.stats-center {
  position: absolute;
  top: 40px;
  text-align: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

@media screen and (max-width: 600px) {
  .stats-center {
    top: 30px;
  }
}
</style>

<script>
export default {
  name: "StatisticsItem",
  props: {
    iconName: String,
    statsNumber: String,
    statsTitle: String
  },

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>