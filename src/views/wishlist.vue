<template>
  <v-app>
    <v-main>
      <Header />

      <v-container>
        <div class="text-h5 text-sm-h4 my-3 text-center text-sm-left">
          Daftar Keinginan Anda
        </div>

        <div class="d-flex flex-row flex-wrap justify-center justify-md-start">
          <CardItem
            v-for="n in 5"
            :key="n"
            itemTitle="Rumah Aman"
            itemCat="Hunian"
            itemPrice="Rp. 150Rb / tahun"
            itemImg="https://images.unsplash.com/photo-1593173493821-2fa8e0a45420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=290&q=80"
            :itemUserRating="104"
            :itemRating="5"
            small
            isDelete
          />
        </div>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardItem from "@/components/carditem";

export default {
  name: "Wishlist",
  components: {
    Header,
    CardItem,
    Footer
  }
};
</script>