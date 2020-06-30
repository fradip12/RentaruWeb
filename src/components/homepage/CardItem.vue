<template>
  <v-card
    elevation="4"
    :width="small ? '22vw' : '31vw'"
    :height="small ? '15vw' : '20vw'"
    class="ma-sm-3 ma-lg-7 pa-0"
    rounded="lg"
  >
    <v-container class="pa-0" style="position:relative;">
      <v-row no-gutters>
        <img
          :src="itemImg"
          :class="{
            'rounded-lg': true,
            'box-img': !small,
            'small-box-img': small
          }"
          alt="itemImg"
        />

        <v-col>
          <v-container>
            <div
              :class="{
                'text-sm-caption': true,
                'text-lg-h5': !small,
                'text-lg-body-1': small
              }"
            >
              {{ itemTitle }}
            </div>

            <v-divider class="my-lg-4 my-3"></v-divider>

            <div
              :class="{
                'grey--text': true,
                'text-lg-h6': !small,
                'text-lg-body-2': small
              }"
            >
              {{ itemCat }}
            </div>

            <div
              :class="{
                'mt-10': true,
                'orange--text': true,
                'text-lg-h5': !small,
                'text-lg-body-1': small
              }"
            >
              {{ itemPrice }}
            </div>

            <v-row
              no-gutters
              style="position:absolute;bottom:10px;width:40%"
              class="align-center"
            >
              <v-rating
                color="black"
                :value="itemRating"
                background-color="black"
                dense
                :x-small="small"
              ></v-rating>
              <div :class="{ 'text-lg-h5': !small, 'text-lg-body-2': small }">
                ({{ itemUserRating }})
              </div>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-btn
        elevation="4"
        fab
        color="primary"
        absolute
        :small="small"
        :class="{ 'btn-fab': !small, 'small-btn-fab': small }"
      >
        <v-icon>search</v-icon>
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import "../../stylesheet/card-item.css";

export default {
  name: "CardItem",
  props: {
    itemTitle: String,
    itemImg: String,
    itemCat: String,
    itemPrice: String,
    itemRating: {
      type: Number,
      default: 0
    },
    itemUserRating: Number,
    itemLink: String,
    small: Boolean
  }
};
</script>