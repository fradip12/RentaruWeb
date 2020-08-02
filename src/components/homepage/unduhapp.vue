<template>
  <v-container fluid class="pa-sm-0 pa-4" style="height: 12vw; max-height: 600px; background: white">
    <v-row no-gutters>
      <img
          v-if="width >= 600"
          style="height: 12vw; max-height: 600px;"
          src="../../assets/apple-hand.png"
          class="hand-img"
          alt="unduh_banner"/>

      <v-col style="height: 12vw; max-height: 600px;" class="d-flex flex-column justify-center">
        <div
            class="text-md-h5 text-h5 text-center text-sm-left font-weight-regular secondary--text"
        >
          Unduh Aplikasi rentaru !
        </div>
        <div
            class="text-lg-h6 text-center text-sm-left secondary--text"
        >
          Temukan kemudahan untuk sewa barang dan jasa, semua dalam satu
          aplikasi di genggaman anda.
        </div>
        <v-container>
          <v-row class="justify-center justify-sm-start">
            <unduhBtn
                style="max-height: 70px;"
                class="ma-sm-1"
                iconName="fab fa-apple"
                marketText="App Store"
            />
            <unduhBtn
                style="max-height: 70px;"
                class="ma-sm-1"
                iconName="fab fa-google-play"
                marketText="Google Play"
            />
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import unduhBtn from "./unduhbtn";

export default {
  name: "UnduhApp",

  components: {
    unduhBtn
  },

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>