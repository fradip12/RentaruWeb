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
          <v-container class="pa-0 pl-1">
            <div
              :class="{
                'text-lg-h5': !small && !xSmall,
                'text-lg-body-1': small,
                'text-body-2': !small || !xSmall,
                'text-caption': small || xSmall,
                'text-xsmall': xSmall
              }"
            >
              {{ itemTitle }}
            </div>

            <v-divider class="my-lg-2"></v-divider>

            <div
              :class="{
                'grey--text': true,
                'text-caption': true,
                'text-lg-h6': !small && !xSmall,
                'text-lg-body-2': small
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
                'text-body-2': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': small || xSmall
              }"
            >
              {{ itemPrice }}
            </div>

            <v-row
              no-gutters
              :class="{
                'bottom-rating': true,
                'right-rating': xSmall,
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
                v-if="width >= 1367"
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

      <!-- search button -->
      <v-btn
        v-if="!isDelete"
        elevation="4"
        fab
        color="primary"
        absolute
        :small="!xSmall"
        :x-small="xSmall"
        :class="{
          'btn-fab': !small && !xSmall,
          'small-btn-fab': small,
          'xsmall-btn-fab': xSmall
        }"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- delete button -->
      <v-btn
        v-if="isDelete"
        elevation="4"
        fab
        color="primary"
        absolute
        x-small
        class="delete-fab"
      >
        <v-icon>fas fa-trash</v-icon>
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
        return { width: "90vw", height: "35vw" };
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
    xSmall: Boolean,
    isDelete: Boolean
  }
};
</script>