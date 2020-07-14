<template>
  <v-card
    elevation="4"
    :width="
      small
        ? smallSizeCard.width
        : xSmall
        ? xsmallSizeCard.width
        : normalSizeCard.width
    "
    :height="
      small
        ? smallSizeCard.height
        : xSmall
        ? xsmallSizeCard.height
        : normalSizeCard.height
    "
    class="ma-lg-7 ma-sm-3 ma-2 pa-0"
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

        <v-col>
          <v-container>
            <div
              :class="{
                'text-lg-h5': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall || small,
                'text-xsmall': xSmall
              }"
            >
              {{ itemTitle }}
            </div>

            <v-divider class="my-lg-2"></v-divider>

            <div
              :class="{
                'grey--text': true,
                'text-lg-h6': !small && !xSmall,
                'text-lg-body-2': small,
                'text-caption': xSmall || small
              }"
            >
              {{ itemCat }}
            </div>

            <div
              :class="{
                'mt-sm-8': !xSmall && !small,
                'mt-md-0': !xSmall,
                'secondary--text': true,
                'text-lg-h6': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall || small
              }"
            >
              {{ itemPrice }}
            </div>

            <v-row
              no-gutters
              :class="{
                'bottom-rating': true,
                'right-rating': xSmall,
                'flex-column': width <= 960 && !xSmall,
                'align-center': width >= 960 || xSmall
              }"
            >
              <v-rating
                color="black"
                :value="itemRating"
                background-color="black"
                dense
                :small="width < 1264 && !small"
                :x-small="small || xSmall"
              ></v-rating>
              <div
                v-if="(!small && !xSmall) || width >= 1367"
                :class="{
                  'text-caption': !xSmall,
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
import "../stylesheet/card-item.css";

export default {
  name: "CardItem",

  computed: {
    width() {
      return screen.width;
    },

    normalSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return { width: "80vw", height: "40vw" };
      }

      if (width < 960) {
        return { width: "60vw", height: "40vw" };
      }

      return { width: "31vw", height: "20vw" };
    },

    smallSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return { width: "60vw", height: "32vw" };
      }

      if (width < 960) {
        return { width: "35vw", height: "20vw" };
      }

      if (width < 1264) {
        return { width: "24vw", height: "15vw" };
      }

      return { width: "22vw", height: "15vw" };
    },

    xsmallSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return { width: "82vw", height: "20vw" };
      }

      if (width <= 960) {
        return { width: "35vw", height: "14vw" };
      }

      if (width <= 1366) {
        return { width: "22vw", height: "11vw" };
      }

      return { width: "17vw", height: "11vw" };
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