<template>
  <!--  <v-skeleton-loader height="100px" width="100%" type="image" class="rounded-lg" datasrc="https://i.pinimg.com/originals/ac/0d/ca/ac0dcafdbde4704892c73eeac81db1b3.jpg"/>-->
  <v-container class="d-flex flex-lg-row flex-wrap justify-center">
    <img height="94" width="70%" type="image" class="rounded-lg" src="../assets/external1.png" alt="external_ads" style="max-width: 750px; max-height: 70px;"/>
  </v-container>
</template>

<script>
export default {
  name: "ExternalAds",

  props: {
    imgUrl: String,
  }
};
</script>