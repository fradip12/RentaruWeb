<template>
  <v-app>
    <v-main>
      <Header />
      <Title />

      <v-container class="max-width" fluid>
        <!-- iklan teratas -->
        <div class="text-lg-h4 text-sm-h5 my-10">Iklan Teratas</div>

        <IklanB2B
          title="Paket Liburan 2 Hari 1 Malam"
          details="Pesan
            sekarang dan dapatkan diskon 20%"
          img="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
        />
        <!-- end of iklan teratas -->

        <!-- rekomendasi untuk anda -->
        <div class="text-lg-h4 text-sm-h5 my-10">
          Rekomendasi untuk Anda
        </div>

        <v-container class="pa-0 d-flex flex-row flex-wrap justify-center">
          <CardItem
            v-for="item in items"
            :key="item.key"
            :itemTitle="item.title"
            :itemCat="item.cat"
            :itemPrice="item.price"
            :itemImg="item.img"
            :itemUserRating="item.userRating"
            :itemRating="item.rating"
          ></CardItem>
        </v-container>

        <!-- end of rekomendasi -->

        <external-ads />

        <!-- mungkin anda minati -->
        <div class="text-lg-h4 text-sm-h5 my-10">
          Mungkin Anda Minati
        </div>
        <v-container class="d-flex flex-lg-row flex-wrap justify-center">
          <CardItem
            v-for="n in 6"
            :key="n"
            itemTitle="Rumah Aman"
            itemCat="Hunian"
            itemPrice="Rp. 150Rb / tahun"
            itemImg="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
            :itemUserRating="104"
            :itemRating="5"
            :small="true"
          ></CardItem>
        </v-container>

        <!-- end of minati -->

        <div class="d-flex justify-center my-10">
          <v-btn
            class="align-self-center"
            color="deep-orange darken-1"
            outlined
            rounded
            x-large
            v-on:click="isShowMore = true"
            v-if="!isShowMore"
            >Muat Lebih Banyak</v-btn
          >
        </div>

        <!-- see more -->
        <div v-if="isShowMore">
          <external-ads />

          <v-container class="d-flex flex-lg-row flex-wrap justify-center">
            <div v-for="n in 12" v-bind:key="n">
              <OfferBox v-if="n == 2" />

              <CardItem
                itemTitle="Mobil Cepat"
                itemCat="Transportasi"
                itemPrice="Rp. 150Rb / jam"
                itemImg="https://images.unsplash.com/photo-1554507650-4490355acbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                :itemUserRating="145"
                :itemRating="1"
                :xSmall="true"
                v-if="n != 2"
              ></CardItem>
            </div>
          </v-container>

          <div class="d-flex justify-center my-10">
            <v-btn
              class="align-self-center"
              color="deep-orange darken-1"
              outlined
              rounded
              x-large
              >Lihat Semua Iklan</v-btn
            >
          </div>
        </div>

        <!-- end of see more -->
      </v-container>
      <cat-slider />
      <statistics />
      <unduh-app />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import CardItem from "@/components/carditem";
import Title from "@/components/homepage/title";
import UnduhApp from "@/components/homepage/unduhapp";
import Statistics from "@/components/homepage/statistics";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ExternalAds from "@/components/externalads";
import CatSlider from "@/components/homepage/catslider";
import OfferBox from "@/components/homepage/offerbox";
import IklanB2B from "@/components/iklanb2b";

import "../stylesheet/home.css";

export default {
  name: "Homepage",
  components: {
    Footer,
    Header,
    CardItem,
    ExternalAds,
    Title,
    UnduhApp,
    Statistics,
    CatSlider,
    OfferBox,
    IklanB2B,
  },

  data: () => ({
    items: [
      {
        id: "8092375928357",
        title: "Kebaya Pengantin",
        cat: "Fashion",
        price: "Rp. 30Rb/hari",
        img:
          "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 3,
        userRating: 52,
      },
      {
        id: "91237012983jhklsa",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
          "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 5,
        userRating: 52,
      },
      {
        id: ";asdlkfj;a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
          "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 5,
        userRating: 52,
      },
      {
        id: "alskdjf908a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
          "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 0,
        userRating: 42,
      },
    ],
    isShowMore: false,
  }),
};
</script>
