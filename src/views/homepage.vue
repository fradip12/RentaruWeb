<template>
  <div>
    <Title/>

    <v-container fluid style="background: white">
      <v-container class="max-width">
        <!-- iklan teratas -->
        <div class="text-lg-h5 text-sm-h5 my-10" style="color: black">Iklan Teratas</div>
        <IklanB2B
            title="Paket Liburan 2 Hari 1 Malam"
            details="Pesan
            sekarang dan dapatkan diskon 20%"
            img="https://i.pinimg.com/originals/ac/0d/ca/ac0dcafdbde4704892c73eeac81db1b3.jpg"
        />
      </v-container>
    </v-container>

    <cat-slider/>



    <!--Rekomendasi untuk Anda-->
    <v-container class="max-width" fluid>


      <!--        &lt;!&ndash; rekomendasi untuk anda &ndash;&gt;-->
      <!--        <v-container class="my-7 mg-1 rounded-lg elevation-2">-->
      <!--          <div class="text-h5 my-4 mx-4">-->
      <!--            Rekomendasi untuk Anda-->
      <!--          </div>-->

      <!--          <v-container class="pa-0 d-flex flex-row flex-wrap justify-center">-->
      <!--            <CardItem-->
      <!--                v-for="item in items"-->
      <!--                :key="item.key"-->
      <!--                :itemTitle="item.title"-->
      <!--                :itemCat="item.cat"-->
      <!--                :itemPrice="item.price"-->
      <!--                :itemImg="item.img"-->
      <!--                :itemUserRating="item.userRating"-->
      <!--                :itemRating="item.rating"-->
      <!--            ></CardItem>-->
      <!--          </v-container>-->

      <!--        </v-container>-->
      <!--        &lt;!&ndash; end of rekomendasi &ndash;&gt;-->

      <!--        <external-ads v-for="item in externalAds"-->
      <!--                      :key="item.key"-->
      <!--                      :imgUrl="item.imgUrl"/>-->

      <!-- mungkin anda minati -->
      <div class="text-lg-h5 text-sm-h5 my-10">
        Rekomendasi untuk Anda
      </div>
      <v-container class="d-flex flex-lg-row flex-wrap justify-center rounded-lg white elevation-1">
        <div v-for="item in items" v-bind:key="item.key">
          <CardItem
              v-if="item.id !== ';asdlkfj;ga9083274'"
              :key="item.key"
              :itemTitle="item.title"
              :itemCat="item.cat"
              :itemPrice="item.price"
              :itemImg="item.img"
              :itemUserRating="item.userRating"
              :itemRating="item.rating"
              :itemLocation="item.location"
              :xSmall=true
          />


          <!--          <CardItem-->
          <!--              v-if="i != 10"-->
          <!--              :key="i"-->
          <!--              itemTitle="Rumah Aman"-->
          <!--              itemCat="Hunian"-->
          <!--              itemPrice="Rp. 120.000/hari"-->
          <!--              itemImg="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"-->
          <!--              :itemUserRating="104"-->
          <!--              :itemRating="5"-->
          <!--              :xSmall="true"-->
          <!--          ></CardItem>-->
          <OfferBox v-if="item.id === ';asdlkfj;ga9083274'"/>
        </div>

        <!-- see more -->
        <div v-if="isShowMore">
          <external-ads/>

          <v-container class="d-flex flex-lg-row flex-wrap justify-center">
            <div v-for="n in 12" v-bind:key="n">
              <OfferBox v-if="n === 2 || n === 8"/>

              <CardItem
                  v-if="n !== 2 && n !== 8"
                  itemTitle="Mobil Cepat"
                  itemCat="Transportasi"
                  itemPrice="Rp. 150Rb / jam"
                  itemImg="https://images.unsplash.com/photo-1554507650-4490355acbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  :itemUserRating="145"
                  :itemRating="1"
                  :xSmall="true"
                  itemLocation="Kota Surabaya"
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
            >Lihat Semua Iklan
            </v-btn
            >
          </div>
        </div>

        <div class="d-flex justify-center my-10">
          <v-btn
              class="align-self-center"
              color="deep-orange darken-1"
              outlined
              rounded
              x-large
              v-on:click="isShowMore = true"
              v-if="!isShowMore"
          >Muat Lebih Banyak
          </v-btn
          >
        </div>

        <!-- end of see more -->
      </v-container>

      <!-- end of minati -->


    </v-container>

    <!--Sedang Hangat-->
    <v-container class="max-width" fluid>
      <div class="text-lg-h5 text-sm-h5 my-10">
        Paling Banyak Dicari
      </div>
      <v-container class="d-flex flex-lg-row flex-wrap justify-center rounded-lg white elevation-1">
        <CardItem
            v-for="n in 8"
            :key="n"
            itemTitle="Rumah Aman"
            itemCat="Hunian"
            itemPrice="Rp. 120.000/hari"
            itemImg="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
            :itemUserRating="104"
            :itemRating="5"
            :xSmall="true"
            itemLocation="Kota Surabaya"

        ></CardItem>

        <!-- see more -->
        <div v-if="isShowMore">
          <external-ads/>

          <v-container class="d-flex flex-lg-row flex-wrap justify-center">
            <div v-for="n in 12" v-bind:key="n">
              <OfferBox v-if="n === 2 || n === 8"/>

              <CardItem
                  v-if="n !== 2 && n !== 8"
                  itemTitle="Mobil Cepat"
                  itemCat="Transportasi"
                  itemPrice="Rp. 150Rb / jam"
                  itemImg="https://images.unsplash.com/photo-1554507650-4490355acbe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  :itemUserRating="145"
                  :itemRating="1"
                  :xSmall="true"
                  itemLocation="Kota Surabaya"

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
            >Lihat Semua Iklan
            </v-btn
            >
          </div>
        </div>

        <div class="d-flex justify-center my-10">
          <v-btn
              class="align-self-center"
              color="deep-orange darken-1"
              outlined
              rounded
              x-large
              v-on:click="isShowMore = true"
              v-if="!isShowMore"
          >Muat Lebih Banyak
          </v-btn
          >
        </div>

        <!-- end of see more -->
      </v-container>


    </v-container>

    <div style="margin-top: 3vw;"/>
    <!--    <statistics/>-->
    <unduh-app/>
  </div>
</template>

<script>
import CardItem from "@/components/carditem";
import Title from "@/components/homepage/title";
import UnduhApp from "@/components/homepage/unduhapp";
// import Statistics from "@/components/homepage/statistics";
// import Footer from "@/components/footer";
// eslint-disable-next-line no-unused-vars
import Header from "@/components/header";
import ExternalAds from "@/components/externalads";
import CatSlider from "@/components/homepage/catslider";
import OfferBox from "@/components/homepage/offerbox";
import IklanB2B from "@/components/iklanb2b";

import "../stylesheet/home.css";


export default {
  // title: 'Rentaru',
  name: "Homepage",
  components: {
    // Header,
    Title,

    IklanB2B,

    CardItem,
    ExternalAds,

    UnduhApp,
    // Statistics,
    CatSlider,
    OfferBox,
  },

  data: () => ({
    items: [
      {
        id: "8092375e928357",
        title: "Kebaya Pengantin",
        cat: "Fashion",
        price: "Rp. 30Rb/hari",
        img:
            "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/5/1945128/1945128_6a4e554e-589c-4505-91da-63c39c400dfd_1000_1000.jpg",
        rating: 4,
        userRating: 42,
        location: 'Kota Surabaya',
      },
      {
        id: "91237012983jurhklsa",
        title: "Honda Jazz 2018",
        cat: "Mobil",
        price: "Rp. 200rb/jam",
        img:
            "https://cdn2.mobilwow.com/images/cars/49677-honda-jazz-2018-1-e9fc90eeb4917d3f4c5c689da2c1041f.jpg",
        rating: 5,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: ";rrasdlkfj;a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 4,
        userRating: 78,
        location: 'Kota Surabaya',
      },
      {
        id: "alskdjf9w08a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 2,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: "91237012agd983jhklsa",
        title: "Honda Jazz 2018",
        cat: "Mobil",
        price: "Rp. 200rb/jam",
        img:
            "https://cdn2.mobilwow.com/images/cars/49677-honda-jazz-2018-1-e9fc90eeb4917d3f4c5c689da2c1041f.jpg",
        rating: 5,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: "8092375928w357",
        title: "Kebaya Pengantin",
        cat: "Fashion",
        price: "Rp. 30Rb/hari",
        img:
            "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/5/1945128/1945128_6a4e554e-589c-4505-91da-63c39c400dfd_1000_1000.jpg",
        rating: 4,
        userRating: 42,
        location: 'Kota Surabaya',
      },
      {
        id: "9123701w2983jhklsa",
        title: "Honda Jazz 2018",
        cat: "Mobil",
        price: "Rp. 200rb/jam",
        img:
            "https://cdn2.mobilwow.com/images/cars/49677-honda-jazz-2018-1-e9fc90eeb4917d3f4c5c689da2c1041f.jpg",
        rating: 5,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: ";asdlkfj;ga9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 4,
        userRating: 78,
        location: 'Kota Surabaya',
      },
      {
        id: "awlskdjf908a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 2,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: ";asdlkfj;aff90g83274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 4,
        userRating: 78,
        location: 'Kota Surabaya',
      },
      {
        id: "alwskdjf90af8a9083274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 2,
        userRating: 32,
        location: 'Kota Surabaya',
      },
      {
        id: "alwskdjf90af8a9083aa274",
        title: "Meja Pengantin",
        cat: "Benda",
        price: "Rp. 50Rb/jam",
        img:
            "https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80",
        rating: 2,
        userRating: 32,
        location: 'Kota Surabaya',
      },
    ],
    isShowMore: false,
    externalAds: [
      {
        id: ";asdlkfj;a9083asd4",
        imgUrl: "https://i.pinimg.com/originals/ac/0d/ca/ac0dcafdbde4704892c73eeac81db1b3.jpg"
      },
    ]
  }),
};
</script>
