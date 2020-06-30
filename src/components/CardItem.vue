<template>
  <v-card elevation="4" width="36vw" height="25vw" class="ma-sm-3 ma-lg-7 pa-0" rounded="lg">
    <v-container class="pa-0" style="position:relative;">
      <v-row no-gutters>
        <img
          :src="itemImg"
          class="rounded-lg"
          alt="itemImg"
          style="width :25vw;height: 25vw;object-fit: cover"
        />

        <v-col>
          <v-container>
            <div class="text-lg-h6 text-sm-caption">{{itemTitle}}</div>

            <v-divider class="my-lg-4 my-3"></v-divider>

            <div class="text-sm-caption text-lg-subtitle-1 grey--text">{{itemCat}}</div>

            <div class="text-lg-h5 text-sm-body-2 orange--text mt-5">{{itemPrice}}</div>

            <v-row no-gutters style="position:absolute;bottom:10px;width:40%" class="align-center">
              <v-rating color="black" :value="itemRating" background-color="black" dense></v-rating>
              <div class="text-sm-caption text-lg-h5">({{itemUserRating}})</div>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-btn elevation="4" fab color="primary" absolute style="right:-28px;bottom:12.5vw;">
        <v-icon>search</v-icon>
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    itemTitle: String,
    itemImg: String,
    itemCat: String,
    itemPrice: String,
    itemRating: Number,
    itemUserRating: Number,
    itemLink: String
  }
};
</script>