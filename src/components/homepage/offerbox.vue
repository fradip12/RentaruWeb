
<template>
  <div
    class="ma-2 ma-sm-3 ma-lg-7 pa-8 d-flex flex-column justify-center container-size rounded-lg"
  >
    <div class="white--text text-body-1 text-lg-h5 text-center">
      Ingin memasang iklan disini?
    </div>

    <v-btn class="mt-lg-8 primary--text" rounded>
      Pasang Iklan
    </v-btn>
  </div>
</template>

<style scoped>
.container-size {
  height: 8vw;
  width: 16vw;
  max-width: 300px;
  max-height: 160px;
  background-color: #ee4000;
}

@media screen and (max-width: 1366px) {
  .container-size {
    height: 8vw;
    width: 16vw;
    max-width: 300px;
    max-height: 160px;
  }
}

@media screen and (max-width: 960px) {
  .container-size {
    height: 8vw;
    width: 16vw;
    max-width: 300px;
    max-height: 160px;
  }
}

@media screen and (max-width: 600px) {
  .container-size {
    height: 8vw;
    width: 16vw;
    max-width: 300px;
    max-height: 160px;
  }
}
</style>

<script>
export default {
  name: "OfferBox",
};
</script>