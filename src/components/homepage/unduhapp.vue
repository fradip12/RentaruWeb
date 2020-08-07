<template>
  <v-container fluid
               class="pa-sm-0 pa-4 justify-center"
               style="height: 12vw; min-height: 200px; max-height: 800px; background: white">
    <v-row no-gutters class="py-3 px-3">
      <img
          v-if="width >= 900"
          style="height: 12vw; max-height: 800px; min-height: 200px;"
          src="../../assets/apple-hand.png"
          class="hand-img py-3 px-3"
          alt="unduh_banner"/>

      <v-col class="d-flex flex-column justify-center align-content-center">
        <div
            class="text-md-h5 text-h5 text-center text-sm-left font-weight-regular secondary--text"
        >
          Unduh Aplikasi rentaru !
        </div>

        <div
            class="text-md-b1 text-center text-sm-left secondary--text"
        >
          Temukan kemudahan untuk sewa barang dan jasa
        </div>

        <v-container>
          <v-row class="justify-center justify-sm-start">
            <unduhBtn
                iconName="fab fa-apple"
                marketText="App Store"
            />
            <unduhBtn
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