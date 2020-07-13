<template>
  <v-container>
    <v-row no-gutters>
      <v-avatar class="avatar-img">
        <img src="../../assets/item2.jpg" />
      </v-avatar>

      <v-col class="mx-4 my-3">
        <div
          class="font-weight-bold text-body-1 text-sm-h6 text-md-body-1 text-lg-h6"
        >
          Martha Christina
        </div>
        <div
          class="text-body-2 text-sm-body-1 grey--text text-md-body-2 text-lg-body-1"
        >
          Anggota sejak 2020
        </div>
      </v-col>

      <v-icon class="mx-sm-3 mx-md-1 mx-lg-3 mx-1 icon-img" color="quarter"
        >fab fa-whatsapp</v-icon
      >
      <v-icon class="mx-sm-3 mx-md-1 mx-lg-3 mx-1 icon-img" color="quarter"
        >fab fa-facebook</v-icon
      >
      <v-icon class="mx-sm-3 mx-md-1 mx-lg-3 mx-1 icon-img" color="quarter"
        >fab fa-line</v-icon
      >
    </v-row>
  </v-container>
</template>

<style scoped>
.avatar-img {
  height: 90px !important;
  width: 90px !important;
  min-width: 90px !important;
}

.icon-img {
  font-size: 60px;
}

@media screen and (max-width: 1367px) {
  .icon-img {
    font-size: 30px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1249px) {
  .avatar-img {
    height: 80px !important;
    width: 80px !important;
  }

  .icon-img {
    font-size: 30px;
  }
}

@media screen and (max-width: 600px) {
  .avatar-img {
    height: 60px !important;
    width: 60px !important;
  }

  .icon-img {
    font-size: 30px;
  }
}
</style>

<script>
export default {
  name: "UserProfile"
};
</script>