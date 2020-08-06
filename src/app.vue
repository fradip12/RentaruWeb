<template>
 <v-app v-bind:style="{background: $vuetify.theme.themes.light.background}">
   <div class="app" id="app">
     <Navbar></Navbar>
     <router-view/>
     <Footer></Footer>
   </div>
 </v-app>
</template>

<script>
// import { mapState } from 'vuex'
// import Header from '@/components/header'
// import HeaderL from '@/components/header_l'
import Footer from "@/components/footer/index";
import Navbar from "@/components/navbar/index"

export default {
  components: {
    Footer,
    // Header,
    // HeaderL,
    Navbar,
  }
}
</script>