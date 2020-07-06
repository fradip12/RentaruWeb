<template>
  <v-card
    elevation="4"
    :width="
      small ? smallSizeCard.width : xSmall ? '17vw' : normalSizeCard.width
    "
    :height="
      small ? smallSizeCard.height : xSmall ? '11vw' : normalSizeCard.height
    "
    class="ma-lg-7 ma-sm-3 mb-5 mb-lg-7 pa-0"
    rounded="lg"
  >
    <v-container class="pa-0" style="position:relative;">
      <v-row no-gutters>
        <img
          :src="itemImg"
          :class="{
            'rounded-lg': true,
            'box-img': !small && !xSmall,
            'small-box-img': small,
            'xsmall-box-img': xSmall
          }"
          alt="itemImg"
        />

        <v-col :cols="xSmall ? '4' : ''">
          <v-container>
            <div
              :class="{
                'text-sm-h5': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall || small
              }"
            >
              {{ itemTitle }}
            </div>

            <v-divider class="my-lg-4 my-1 my-sm-3"></v-divider>

            <div
              :class="{
                'grey--text': true,
                'text-lg-h6': !small && !xSmall,
                'text-sm-h6': !small && !xSmall,
                'text-lg-body-2': small,
                'text-caption': xSmall || small
              }"
            >
              {{ itemCat }}
            </div>

            <div
              :class="{
                'mt-sm-8': !xSmall,
                'mt-md-0': !xSmall,
                'mt-2': xSmall,
                'secondary--text': true,
                'text-sm-h6': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall || small
              }"
            >
              {{ itemPrice }}
            </div>

            <v-row
              no-gutters
              style="position:absolute;bottom:10px;width:40%"
              :class="{
                'flex-column': width <= 960,
                'align-center': width >= 960
              }"
            >
              <v-rating
                color="black"
                :value="itemRating"
                background-color="black"
                dense
                :small="width <= 600"
                :x-small="small || xSmall"
              ></v-rating>
              <div
                v-if="!small || width >= 600"
                :class="{
                  'text-caption': !small && !xSmall,
                  'text-sm-body-1': !small && !xSmall,
                  'text-lg-h5': !small && !xSmall,
                  'text-lg-body-2': small,
                  'text-xcaption': xSmall
                }"
              >
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
        :x-small="xSmall"
        :class="{
          'btn-fab': !small && !xSmall,
          'small-btn-fab': small,
          'xsmall-btn-fab': xSmall
        }"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import "../../stylesheet/card-item.css";

export default {
  name: "CardItem",

  computed: {
    width() {
      return screen.width;
    },

    normalSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return { width: "80vw", height: "50vw" };
      }

      if (width <= 960) {
        return { width: "60vw", height: "40vw" };
      }

      return { width: "31vw", height: "20vw" };
    },

    smallSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return { width: "60vw", height: "35vw" };
      }

      if (width <= 960) {
        return { width: "34vw", height: "23vw" };
      }

      return { width: "22vw", height: "15vw" };
    }
  },

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
    small: Boolean,
    xSmall: Boolean
  }
};
</script>