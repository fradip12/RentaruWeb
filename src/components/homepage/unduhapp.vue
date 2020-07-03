<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <img src="../../assets/apple-hand.png" class="hand-img" />

      <v-col class="d-flex flex-column justify-center">
        <div class="text-lg-h2 font-weight-regular secondary--text">
          Unduh Aplikasi rentaru !
        </div>
        <div class="text-lg-h5 my-10 secondary--text">
          Temukan kemudahan untuk sewa barang dan jasa, semua dalam satu
          aplikasi di genggaman anda.
        </div>
        <v-container>
          <v-row>
            <v-btn
              dark
              class="pa-8 ma-5 rounded-lg"
              width="260px"
              height="80px"
            >
              <v-container>
                <v-row>
                  <v-icon size="50">fab fa-apple</v-icon>
                  <v-col class="justify-start ml-4">
                    <div class="text-left text-subtitle-2">
                      Dapatkan di<br />
                      <span class="text-left text-h5 pa-0">App Store</span>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-btn>
            <v-btn
              dark
              class="pa-8 ma-5 rounded-lg"
              width="260px"
              height="80px"
            >
              <v-container>
                <v-row>
                  <v-icon size="50">fab fa-google-play</v-icon>
                  <v-col class="justify-start">
                    <div class="text-left text-subtitle-2">
                      Dapatkan di<br />
                      <span class="text-left text-h5 pa-0">Google Play</span>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-btn>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UnduhApp"
};
</script>