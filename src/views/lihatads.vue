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

export default {
  name: "LihatAd",
  components: {
    Header,
    UserProfile,
    Footer
  }
};
</script>