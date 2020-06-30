<template>
  <v-app>
    <v-main>
      <Header />
      <Title />

      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="1"></v-col>
          <v-col cols="10">
            <!-- iklan teratas -->
            <div class="text-lg-h4 text-sm-h5 my-10">Iklan Teratas</div>

            <div class="container-relative">
              <img
                class="top-image"
                src="../assets/item1.jpeg"
                alt="iklan teratas"
              />

              <!-- overlay box -->
              <div class="top-text">
                <div class="text-lg-h4 text-sm-h5">
                  Paket Liburan 2 Hari 1 Malam
                </div>
                <div class="text-lg-h6">
                  Pesan sekarang dan dapatkan diskon 20%
                </div>
              </div>

              <!-- rating  -->
              <div class="top-rating d-flex flex-row align-center">
                <v-rating
                  v-bind="size"
                  background-color="black"
                  color="black"
                ></v-rating>
                <div class="text-lg-h6">(153)</div>
              </div>
            </div>
            <!-- end of iklan teratas -->

            <!-- rekomendasi untuk anda -->
            <div class="text-lg-h4 text-sm-h5 my-10">
              Rekomendasi untuk Anda
            </div>

            <v-container class="d-flex flex-lg-row flex-wrap justify-center">
              <div v-for="item in items" v-bind:key="item.key">
                <CardItem
                  :itemTitle="item.title"
                  :itemCat="item.cat"
                  :itemPrice="item.price"
                  :itemImg="item.img"
                  :itemUserRating="item.userRating"
                  :itemRating="item.rating"
                ></CardItem>
              </div>
            </v-container>

            <!-- end of rekomendasi -->

            <external-ads />

            <!-- mungkin anda minati -->
            <div class="text-lg-h4 text-sm-h5 my-10">
              Mungkin Anda Minati
            </div>
            <v-container class="d-flex flex-lg-row flex-wrap justify-center">
              <div v-for="n in 6" v-bind:key="n">
                <CardItem
                  itemTitle="Rumah Aman"
                  itemCat="Hunian"
                  itemPrice="Rp. 150Rb / tahun"
                  itemImg="../assets/item2.jpg"
                  :itemUserRating="104"
                  :itemRating="5"
                  :small="true"
                ></CardItem>
              </div>
            </v-container>

            <!-- end of minati -->
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import CardItem from "../components/homepage/CardItem.vue";
import Title from "../components/homepage/Title.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import ExternalAds from "../components/ExternalAds.vue";

import "../stylesheet/home.css";

export default {
  name: "Homepage",
  components: {
    Footer,
    Header,
    CardItem,
    ExternalAds,
    Title
  },

  data: () => ({
    items: [
      {
        id: "8092375928357",
        title: "Kebaya Pengantin",
        cat: "Fashion",
        price: "Rp. 30Rb/hari",
        img: "../assets/item2.jpg",
        rating: 3,
        userRating: 52
      },
      {
        id: "91237012983jhklsa",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img: "../assets/item2.jpg",
        rating: 5,
        userRating: 52
      },
      {
        id: ";asdlkfj;a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img: "../assets/item2.jpg",
        rating: 5,
        userRating: 52
      },
      {
        id: "alskdjf908a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img: "../assets/item2.jpg",
        rating: 0,
        userRating: 42
      }
    ]
  }),

  computed: {
    size() {
      const size = { xs: "x-small", sm: "small", lg: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    }
  }
};
</script>
