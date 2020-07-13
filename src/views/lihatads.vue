<template>
  <v-app>
    <v-main>
      <Header />

      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="1" />
          <img
            src="../assets/item2.jpg"
            class="rounded-lg main-img ma-5"
            alt="gambar iklan"
          />
          <v-col class="ma-5 overflow-y-auto" style="height: 40vw">
            <!-- share and cart btn -->
            <div class="d-flex flex-row-reverse">
              <v-icon class="mx-5" color="primary">fas fa-shopping-cart</v-icon>
              <v-icon class="mx-5" color="primary">fas fa-share-alt</v-icon>
            </div>

            <div class="text-h4 primary--text font-weight-bold my-5">
              Rp 30.000 / hari
            </div>
            <v-divider />

            <!-- Deskripsi -->
            <div class="text-h6 font-weight-bold my-5">Deskripsi</div>
            <div class="text-h6 font-weight-thin my-5">
              Kebaya Modern hasil jahitan sendiri, nyaman untuk digunakan dan
              tidak gatal di kulit
            </div>

            <!-- Status Barang -->
            <div class="text-h6 my-2 font-weight-bold">
              Jenis : <span class="grey--text font-weight-medium">Barang</span>
            </div>

            <div class="text-h6 my-2 font-weight-bold">
              Kategori :
              <span class=" font-weight-medium grey--text">Fashion</span>
            </div>

            <div class="text-h6 my-2 font-weight-bold">
              Stok Tersedia :
              <span class="grey--text font-weight-medium">5 Buah</span>
            </div>

            <!-- user info -->
            <div class="text-h6 my-2 mt-8 font-weight-bold">
              Penyedia Sewa
            </div>
            <UserProfile />

            <!-- Lokasi -->
            <div class="text-h6 font-weight-bold my-2">
              Lokasi: <span class="font-weight-medium">DKI Jakarta</span>
            </div>
            <img
              src="../assets/map.png"
              width="100%"
              height="300vh"
              style="object-fit: cover;"
            />

            <!-- ulasan -->
            <div class="d-flex justify-center my-4">
              <v-btn color="quarter" outlined>Lihat Ulasan Penyewa</v-btn>
            </div>

            <!-- report -->
            <v-container>
              <v-row>
                <div class="text-h6 quarter--text">ID Iklan: 123456</div>
                <v-spacer />
                <v-btn color="primary" class="mx-2 white--text" depressed
                  >Laporkan iklan ini
                </v-btn>
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="1" />
        </v-row>
      </v-container>

      <!-- Iklan lain yang mirip -->
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="1" />
          <v-col>
            <div class="text-h4 my-7">Iklan Lain yang Terkait</div>
            <v-container>
              <v-row class="justify-center">
                <CardItem
                  v-for="n in 3"
                  :key="n"
                  itemTitle="Rumah Aman"
                  itemCat="Hunian"
                  itemPrice="Rp. 150Rb / tahun"
                  itemImg="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
                  :itemUserRating="104"
                  :itemRating="5"
                  :small="true"
                />
              </v-row>
            </v-container>
          </v-col>
          <v-col cols="1" />
        </v-row>
      </v-container>

      <Footer />
    </v-main>
  </v-app>
</template>

<style scoped>
.main-img {
  width: 40vw;
  height: 40vw;
  object-fit: cover;
}
</style>

<script>
import Footer from "@/components/footer";
import Header from "@/components/header";
import UserProfile from "@/components/lihatads/userprofile";
import CardItem from "@/components/carditem";

export default {
  name: "LihatAd",
  components: {
    Header,
    UserProfile,
    CardItem,
    Footer
  }
};
</script>