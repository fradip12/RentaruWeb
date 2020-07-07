
<template>
  <div
    class="ma-2 ma-sm-3 ma-lg-7 pa-8 d-flex flex-column justify-center container-size"
  >
    <div class="white--text text-body-1 text-lg-h5 text-center">
      Ingin melihat iklan anda sendiri ?
    </div>

    <v-btn class="mt-lg-8 primary--text" rounded>
      Pasang Iklan
    </v-btn>
  </div>
</template>

<style scoped>
.container-size {
  height: 11vw;
  width: 17vw;
  background-color: #ee4000;
}

@media screen and (max-width: 1366px) {
  .container-size {
    width: 22vw;
    height: 11vw;
  }
}

@media screen and (max-width: 960px) {
  .container-size {
    width: 35vw;
    height: 14vw;
  }
}

@media screen and (max-width: 600px) {
  .container-size {
    height: 20vw;
    width: 82vw;
  }
}
</style>

<script>
export default {
  name: "OfferBox"
};
</script>