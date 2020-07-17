<template>
  <div>
    <!-- iklan teratas -->
    <div class="container-relative">
      <img class="top-image" :src="img" alt="iklan teratas" />

      <!-- overlay box -->
      <div class="top-text">
        <div class="text-lg-h4 text-sm-h5">{{ title }}</div>
        <div class="text-lg-h6">{{ details }}</div>
      </div>

      <!-- rating  -->
      <div class="top-rating d-flex flex-row align-center">
        <v-rating
          v-bind="size"
          background-color="black"
          color="black"
        ></v-rating>
        <div class="text-lg-h6">(153)</div>
      </div>
    </div>
    <!-- end of iklan teratas -->
  </div>
</template>

<style scoped>
.container-relative {
  position: relative;
}

.top-image {
  width: 100%;
  height: 40vw;
  object-fit: cover;
}

.top-text {
  position: absolute;
  bottom: 6px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 40px;
}

.top-rating {
  position: absolute;
  top: 10px;
  right: 10px;
  flex-direction: row;
}

@media screen and (max-width: 1264px) {
  .top-text {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>

<script>
export default {
  name: "IklanB2B",

  props: {
    title: String,
    details: String,
    img: String
  }
};
</script>