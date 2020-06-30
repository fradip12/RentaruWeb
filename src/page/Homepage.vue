<template>
  <v-app>
    <v-main>
      <Header />
      <!-- title section -->
      <v-container
        class="fill-height true-fill-height container-relative"
        style="background-color: #f4511e;"
        fluid
      >
        <v-row no-gutters>
          <v-col cols="1"></v-col>
          <v-col cols="6">
            <div class="text-lg-h2 text-sm-h4 white--text">
              Sewa Barang dan Jasa ?
            </div>

            <br />

            <div class="mt-lg-5 text-lg-h3 text-sm-h5 white--text">
              Rentaru saja!
            </div>

            <v-btn
              class="mt-lg-16 mt-sm-5 primary--text"
              v-bind="size"
              rounded
              color="white"
              >Jelajahi Kategori</v-btn
            >

            <br />

            <v-btn
              class="mt-lg-16 mt-sm-5 white--text"
              v-bind="size"
              rounded
              outlined
              color="grey lighten-2"
              >Pelajari Lebih Lanjut</v-btn
            >
          </v-col>

          <v-col cols="5"></v-col>
        </v-row>

        <div class="center-item">
          <div class="text-lg-h5 white--text">Lihat Iklan</div>
          <v-icon v-bind="size" dark>keyboard_arrow_down</v-icon>
        </div>
      </v-container>
      <!-- end of title section -->

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
            <v-container class="d-flex flex-lg-row flex-wrap">
              <div v-for="n in 4" v-bind:key="n">
                <CardItem
                  itemTitle="Kebaya Pengantin Pink Perempuan Modern"
                  itemCat="Fashion"
                  itemPrice="Rp. 30rb/hari"
                  itemImg="../assets/item2.jpg"
                  itemUserRating="52"
                  itemRating="3"
                ></CardItem>
              </div>
            </v-container>

            <!-- end of rekomendasi -->
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

    <script>
import CardItem from "../components/CardItem.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

import "../stylesheet/home.css";

export default {
  name: "Homepage",
  components: {
    Footer,
    Header,
    CardItem
  }
};
</script>
