<template>
  <v-container
    class="fill-height true-fill-height container-relative"
    style="background-color: #f4511e;"
    fluid
  >
    <v-row no-gutters>
      <v-col cols="1"></v-col>
      <v-col cols="6">
        <div class="text-lg-h2 text-sm-h4 white--text">
          Sewa Barang dan Jasa ?
        </div>

        <br />

        <div class="mt-lg-5 text-lg-h3 text-sm-h5 white--text">
          Rentaru saja!
        </div>

        <v-btn
          class="mt-lg-16 mt-sm-5 primary--text"
          v-bind="size"
          rounded
          color="white"
          >Jelajahi Kategori</v-btn
        >

        <br />

        <v-btn
          class="mt-lg-16 mt-sm-5 white--text"
          v-bind="size"
          rounded
          outlined
          color="grey lighten-2"
          >Pelajari Lebih Lanjut</v-btn
        >
      </v-col>

      <v-col cols="5"></v-col>
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
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    }
  }
};
</script>