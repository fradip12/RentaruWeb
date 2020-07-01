<template>
  <v-card
    elevation="4"
    :width="small ? '22vw' : xSmall ? '17vw' : '31vw'"
    :height="small ? '15vw' : xSmall ? '11vw' : '20vw'"
    class="ma-sm-3 ma-lg-7 pa-0"
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
                'text-sm-caption': true,
                'text-lg-h5': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall
              }"
            >
              {{ itemTitle }}
            </div>

            <v-divider class="my-lg-4 my-3"></v-divider>

            <div
              :class="{
                'grey--text': true,
                'text-lg-h6': !small && !xSmall,
                'text-lg-body-2': small,
                'text-caption': xSmall
              }"
            >
              {{ itemCat }}
            </div>

            <div
              :class="{
                'mt-10': !xSmall,
                'mt-2': xSmall,
                'orange--text': true,
                'text-lg-h5': !small && !xSmall,
                'text-lg-body-1': small,
                'text-caption': xSmall
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
                :x-small="small || xSmall"
              ></v-rating>
              <div
                :class="{
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