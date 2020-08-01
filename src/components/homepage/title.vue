<template>
  <v-container
      class="fill-height true-fill-height main-bg container-relative pa-0"
      fluid
  >
    <v-row no-gutters>
      <v-col v-if="width >= 960" cols="1"></v-col>
      <v-col>
        <div class="text-lg-h2 text-h3 white--text text-center text-md-left">
          Sewa Barang dan Jasa?
        </div>

        <!--        <br />-->

        <div
            class="mt-5 text-lg-h3 text-h3 white--text text-center text-md-left">
          Rentaru Saja

        </div>

        <v-btn
            class="mt-lg-16 mt-10 primary--text align-self-center"
            x-large
            :block="width <= 960 ? true : false"
            rounded
            color="white">
          Jelajahi Kategori
        </v-btn>

        <br/>

        <v-btn
            class="mt-lg-16 mt-sm-5 white--text"
            x-large
            :block="width <= 960 ? true : false"
            rounded
            outlined
            color="white"
        >Pelajari Lebih Lanjut
        </v-btn
        >
      </v-col>

      <v-col v-if="width >= 960" cols="5">
        <img src="../../assets/man.png" class="man-img"/>
      </v-col>
    </v-row>

    <div class="center-item">
      <div class="text-lg-h5 white--text">Lihat Iklan</div>
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
    }
  }
};
</script>