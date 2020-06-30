<template>
  <v-container style="height:40vw;" class="fill-height pa-10" fluid>
    <v-row no-gutters>
      <v-col cols="5"> </v-col>

      <v-col cols="5" class="justify-center">
        <div class="text-lg-h2 font-weight-regular orange--text">
          Unduh Aplikasi rentaru !
        </div>
        <div class="text-lg-h5 my-10 orange--text">
          Temukan kemudahan untuk sewa barang dan jasa, semua dalam satu
          aplikasi di genggaman anda.
        </div>
        <v-row>
          <v-btn dark class="pa-8 ma-5 rounded-lg" width="250px" height="80px">
            <v-row>
              <v-icon size="50">fab fa-apple</v-icon>
              <v-col class="justify-start">
                <div class="text-left text-subtitle-2">
                  Dapatkan di<br />
                  <span class="text-left text-h5 pa-0">App Store</span>
                </div>
              </v-col>
            </v-row>
          </v-btn>
          <v-btn dark class="pa-8 ma-5 rounded-lg" width="250px" height="80px">
            <v-row>
              <v-icon size="50">fab fa-google-play</v-icon>
              <v-col class="justify-start">
                <div class="text-left text-subtitle-2">
                  Dapatkan di<br />
                  <span class="text-left text-h5 pa-0">Google Play</span>
                </div>
              </v-col>
            </v-row>
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UnduhApp"
};
</script>