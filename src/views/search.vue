<template>
  <v-app>
    <v-main>
      <Header />

      <v-container fluid>
        <div class="text-h6 text-md-h4 text-center text-md-left my-5">
          Hasil pencarian untuk "meja"
        </div>

        <v-row no-gutters class="d-flex flex-column flex-md-row">
          <v-col :cols="width >= 960 ? (width >= 1264 ? '2' : '3') : false">
            <!-- saring card -->
            <v-card flat style="background-color:#ce3800;">
              <v-card-title class="white--text"
                ><v-icon class="mr-3" color="white">fas fa-filter</v-icon
                >Saring</v-card-title
              >
              <v-expansion-panels accordion>
                <KategoriExpansion />

                <!-- start of expansion panel list -->
                <v-expansion-panel v-for="item in expansionItem" :key="item">
                  <v-expansion-panel-header
                    color="primary"
                    class="white--text white"
                    >{{ item }}
                    <template v-slot:actions>
                      <v-icon color="white">$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                </v-expansion-panel>
                <!-- end of expansion panel -->
              </v-expansion-panels>
            </v-card>
            <!-- end of saring card -->
          </v-col>

          <v-col>
            <v-container class="sort-container mr-md-0">
              <!-- urutkan -->
              <v-row no-gutters>
                <v-col
                  cols="5"
                  style="background-color: #ce3800; height: 40px;"
                  class="d-flex align-center justify-center "
                >
                  <div class="white--text text-center">
                    <v-icon class="mr-2" color="white"
                      >fas fa-sort-amount-down</v-icon
                    >Urutkan
                  </div>
                </v-col>
                <v-col>
                  <v-select
                    v-model="sort"
                    :items="sortItem"
                    dense
                    outlined
                    color="primary"
                    class="rounded-0"
                  />
                </v-col>
              </v-row>
            </v-container>
            <!-- end of urutkan -->

            <v-container>
              <IklanB2B
                title="Paket Liburan 2 Hari 1 Malam"
                details="Pesan
            sekarang dan dapatkan diskon 20%"
                img="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
              />

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
                  small
                ></CardItem>
              </v-container>

              <external-ads />
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <Footer />
    </v-main>
  </v-app>
</template>

<style  scoped>
.sort-container {
  width: 100%;
}

@media screen and (min-width: 960px) {
  .sort-container {
    width: 40%;
    align-self: flex-end;
  }
}

@media screen and (min-width: 1264px) {
  .sort-container {
    width: 30%;
    align-self: flex-end;
  }
}
</style>

<script>
import Footer from "@/components/footer";
import Header from "@/components/header";

import KategoriExpansion from "@/components/search/kategoriExpansion";
import IklanB2B from "@/components/iklanb2b";
import ExternalAds from "@/components/externalads";
import CardItem from "@/components/carditem";

export default {
  name: "Search",

  components: {
    Header,
    Footer,
    KategoriExpansion,
    IklanB2B,
    CardItem,
    ExternalAds
  },

  data: function() {
    return {
      expansionItem: ["Lokasi", "Rentang Harga", "Penilaian", "Jenis Iklan"],
      sortItem: ["Relevan", "Harga Terendah", "Harga Tertinggi"],
      sort: "Relevan"
    };
  },

  computed: {
    width() {
      return screen.width;
    }
  },

  methods: {
    toggle: function() {
      this.outdoor != this.outdoor;
    }
  }
};
</script>