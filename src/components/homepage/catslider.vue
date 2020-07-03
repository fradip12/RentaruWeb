<template>
  <v-container
    fluid
    true-fill-height
    style="background-color:#f5f5f5;"
    class="pa-5"
  >
    <div class="text-h3 text-center secondary--text  mt-10">
      Temukan Kebutuhanmu
    </div>
    <div class="custom-divider" />

    <Carousel
      :autoplay="true"
      :perPage="4"
      :scrollPerPage="false"
      paginationActiveColor="#ce3800"
      paginationColor="#ff7543"
      class="separator-margin"
    >
      <Slide v-for="item in items" :key="item.key">
        <div class="box-cat">
          <v-icon class="center-icon mt-10" size="150" dark>{{
            item.icon
          }}</v-icon>
          <div class="white--text text-center text-h5 mt-10">
            {{ item.text }}
          </div>
        </div>
      </Slide>
    </Carousel>

    <div style="width:80vw; margin-left:auto; margin-right: auto;">
      <external-ads />
    </div>
  </v-container>
</template>

<script>
import ExternalAds from "@/components/externalads";
import { Carousel, Slide } from "vue-carousel";

import "../../stylesheet/catslider.css";

export default {
  name: "CatSlider",
  components: {
    ExternalAds,
    Carousel,
    Slide
  },
  data: function() {
    return {
      items: [
        {
          key: 1,
          icon: "fas fa-mountain",
          text: "Outdoor"
        },
        {
          key: 2,
          icon: "fas fa-home",
          text: "Hunian"
        },
        {
          key: 3,
          icon: "fas fa-car",
          text: "Transportasi"
        },
        {
          key: 4,
          icon: "fas fa-plug",
          text: "Elektronik"
        },
        {
          key: 5,
          icon: "fas fa-tshirt",
          text: "Fashion"
        },
        {
          key: 6,
          icon: "fas fa-hands",
          text: "Jasa"
        },
        {
          key: 7,
          icon: "fas fa-comment-dots",
          text: "Lainnya"
        }
      ]
    };
  }
};
</script>