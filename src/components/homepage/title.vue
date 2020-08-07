<template>
  <v-container
      class="main-bg container-relative p-0"
      fluid
      :style="{height: getHeight + 'px'}">
    <v-row no-gutters class="my-3">

      <v-col class="text-center center-item" style="height: 300px;">
        <div class="white--text text-center"
             style="font-size: 2em;">
          Sewa Barang dan Jasa? Rentaru Aja!
        </div>

        <template v-if="width > 900">
          <div style="height: 1vh"/>
        </template>

        <v-btn
            class="ms-3 mt-2 primary--text align-self-center"
            x-large
            :block="width <= 960"
            rounded
            color="white"
            style="font-size: 1em; min-width: 280px; max-width: 130px;">
          Jelajahi Kategori
        </v-btn>
        <br>

        <template v-if="width > 900">
          <div style="height: 1vh"/>
        </template>

        <v-btn
            class="ms-3 mt-2 white--text"
            x-large
            :block="width <= 960"
            rounded
            outlined
            color="white"
            style="font-size: 1em; min-width: 280px; "
        >Pelajari Lebih Lanjut
        </v-btn
        >
      </v-col>

      <v-col v-if="width >= 960">
        <img src="../../assets/man.png" class="man-img" alt="man_banner"
             :height="getHeight*0.8"/>
      </v-col>
    </v-row>

    <div class="center-item mt-2">
      <div class="white--text">Lihat Iklan</div>
      <v-icon v-bind="size" dark>mdi-chevron-down</v-icon>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Title",

  computed: {
    width() {
      return screen.width;
    },
    size() {
      const size = {xs: "x-small", sm: "small", lg: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    },
    getHeight() {
      if (this.width < 900) {
        return screen.height * 0.4;
      } else {
        return screen.height * 0.4;
      }
    },
  }
};
</script>