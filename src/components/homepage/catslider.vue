<template>
  <v-container fluid style="background: white">
    <v-container class="max-width" style="padding: 10px; position: center">
      <div
          class="text-md-h5 text-sm-h5 text-h5 text-center secondary--text mt-sm-5 mt-5"
      >
        Temukan Kebutuhanmu
      </div>
      <div class="custom-divider"/>

      <Carousel
          :autoplay="true"
          :perPage="width <= 600 ? 3 : (width <= 960 ? 4 : 5)"
          :scrollPerPage="false"
          paginationActiveColor="#ce3800"
          paginationColor="#ff7543"
          class="separator-margin align-center">
        <Slide v-for="item in items" :key="item.key" style="align-content: center; position: center">
          <div class="box-cat d-flex flex-column rounded-lg" style="max-height: 220px; max-width: 220px;">
            <v-icon class="rounded-lg" :size="width >= 600 ? 80 : 70" dark>{{
                item.icon
              }}
            </v-icon>
            <div class="white--text text-center text-sm-h5 text-body-1">
              {{ item.text }}
            </div>
          </div>
        </Slide>
      </Carousel>

      <div style="width: 80%; margin-left: auto; margin-right: auto;">
      </div>
    </v-container>

  </v-container>
</template>

<script>
import {Carousel, Slide} from "vue-carousel";

import "../../stylesheet/catslider.css";

export default {
  name: "CatSlider",
  components: {
    Carousel,
    Slide,
  },

  computed: {
    width() {
      return screen.width;
    },
  },

  data: function () {
    return {
      items: [
        {
          key: 1,
          icon: "fas fa-mountain",
          text: "Outdoor",
        },
        {
          key: 2,
          icon: "fas fa-home",
          text: "Hunian",
        },
        {
          key: 3,
          icon: "fas fa-car",
          text: "Transportasi",
        },
        {
          key: 4,
          icon: "fas fa-plug",
          text: "Elektronik",
        },
        {
          key: 5,
          icon: "fas fa-tshirt",
          text: "Fashion",
        },
        {
          key: 6,
          icon: "fas fa-hands",
          text: "Jasa",
        },
        {
          key: 7,
          icon: "fas fa-comment-dots",
          text: "Lainnya",
        },
      ],
    };
  },
};
</script>