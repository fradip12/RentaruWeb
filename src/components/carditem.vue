<template>
  <v-card
      elevation="3"
      :max-height="
      small
        ? (smallSizeCard.maxHeight)
        : (xSmall
        ? xSmallSizeCard.maxHeight
        : normalSizeCard.maxHeight)
    "
      :max-width="
      small
        ? (smallSizeCard.maxWidth)
        : (xSmall
        ? xSmallSizeCard.maxWidth
        : normalSizeCard.maxWidth)
    "
      :width="
      small
        ? smallSizeCard.width
        : xSmall
        ? xSmallSizeCard.width
        : normalSizeCard.width
    "
      :height="
      small
        ? smallSizeCard.height
        : xSmall
        ? xSmallSizeCard.height
        : normalSizeCard.height
    "
      class="ma-lg-7 ma-sm-3 ma-2 pa-0"
      rounded="lg"
  >
    <v-container class="pa-0" style="position: relative;">
      <v-row no-gutters onclick="goToEvents()">
        <!--Thumbnail-->
        <img
            :src="itemImg"
            :class="{
            'rounded-lg': true,
            // 'box-img': !small && !xSmall,
            // 'small-box-img': small,
            'xsmall-box-img': true,
          }"
            alt="itemImg"
        />
        <!--Information-->
        <v-col>
          <v-container class="pa-0 pl-1">

            <!--Title-->
            <div
                :class="{
                // 'text-lg-h5': !small && !xSmall,
                // 'text-lg-body-1': small,
                // 'text-body-2': !small || !xSmall,
                'text-xcaption': true,
                // 'text-xsmall': xSmall,
              }"
                style="margin-top: 5px; margin-left: 5px;"
            >
              {{ itemTitle }}
            </div>

            <!--Category-->
            <div
                :class="{
                'grey--text': true,
                'text-caption': true,
                // 'text-lg-h6': !small && !xSmall,
                // 'text-lg-body-2': small,
              }"
                style="margin-left: 5px; margin-top: 1px;"
            >
              {{ itemCat }}
            </div>

            <v-divider/>

            <!--Price-->
            <div
                :class="{
                // 'mt-sm-8': !xSmall && !small,
                // 'mt-md-0': !xSmall,
                'secondary--text': true,
                // 'text-lg-h6': !small && !xSmall,
                // 'text-body-2': !small && !xSmall,
                // 'text-lg-body-1': small,
                'text-caption': small || xSmall,
              }"
                style="margin-top: 5px; margin-left: 5px;"
            >
              {{ itemPrice }}
            </div>

            <!--Address-->
            <div
                :class="{
                // 'mt-sm-8': !xSmall && !small,
                // 'mt-md-0': !xSmall,
                'secondary--text': true,
                // 'text-lg-h6': !small && !xSmall,
                // 'text-body-2': !small && !xSmall,
                // 'text-lg-body-1': small,
                'text-caption': small || xSmall,
              }"
                style="margin-top: 5px; margin-left: 5px;"
            >
              {{ itemLocation }}
            </div>


            <!--            Rating-->
            <v-row
                no-gutters
                :class="{
                'bottom-rating': true,
                'right-rating': xSmall,
                'align-center': width >= 960 || xSmall,
              }"
                style="margin-top: 5px; margin-left: 5px; margin-bottom: 5px;"

            >
              <v-rating
                  color="orange"
                  :value="itemRating"
                  background-color="orange"
                  dense
                  :small="width < 1264 && !small"
                  :x-small="small || xSmall"
              ></v-rating>
              <div
                  v-if="width >= 1367"
                  :class="{
                  // 'text-caption': !xSmall,
                  // 'text-sm-body-1': !small && !xSmall,
                  // 'text-lg-h5': !small && !xSmall,
                  // 'text-lg-body-2': small,
                  'text-xcaption': xSmall,
                }"
                  style="margin-left: 5px;"

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
          elevation="3"
          fab
          color="primary"
          absolute
          :small="!xSmall"
          :x-small="xSmall"
          :class="{
          'btn-fab': !small && !xSmall,
          'small-btn-fab': small,
          'xsmall-btn-fab': xSmall,
        }"
          href="/lihatads"
          onclick="goToEvents()"
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
        return {width: "90vw", height: "35vw"};
      }

      if (width < 960) {
        return {width: "60vw", height: "40vw"};
      }

      return {
        width: "31vw",
        height: "20vw",
        maxWidth: "400px",
        maxHeight: "300px",
      };
    },

    smallSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return {width: "60vw", height: "32vw"};
      }

      if (width < 960) {
        return {width: "35vw", height: "20vw"};
      }

      if (width < 1264) {
        return {width: "24vw", height: "15vw"};
      }

      return {
        width: "22vw",
        height: "15vw",
        maxWidth: "423px",
        maxHeight: "289px",
      };
    },

    xSmallSizeCard() {
      let width = screen.width;

      if (width <= 600) {
        return {width: "82vw", height: "20vw"};
      }

      if (width <= 960) {
        return {width: "35vw", height: "14vw"};
      }

      if (width <= 1366) {
        return {width: "22vw", height: "11vw"};
      }

      return {
        width: "16vw",
        height: "8vw",
        maxWidth: "300px",
        maxHeight: "160px",
      };
    },
  },

  props: {
    itemTitle: String,
    itemImg: String,
    itemCat: String,
    itemPrice: String,
    itemRating: {
      type: Number,
      default: 0,
    },
    itemLocation: String,
    itemUserRating: Number,
    itemLink: String,
    small: Boolean,
    xSmall: Boolean,
    isDelete: Boolean,
  },
  methods: {
    goToEvents: function () {
      location.href = '/lihatads'
    }
  },
};
</script>