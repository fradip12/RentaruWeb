<template>
 <v-app v-bind:style="{background: $vuetify.theme.themes.light.background}">
<!--   <header role="banner" class="bg-blue" >-->
<!--     <div class="max-w-5xl mx-auto flex flex-wrap items-center px-5 py-5">-->
<!--       <router-link-->
<!--           to="/"-->
<!--           class="flex items-center text-3xl text-white leading-none uppercase relative"-->
<!--       >-->
<!--         <span>S</span>-->
<!--       </router-link>-->
<!--     </div>-->
<!--   </header>-->
<!--   <nav class="bg-white shadow" style="position: fixed">-->
<!--     <div class="max-w-5xl mx-auto px-5">-->
<!--       <ol>-->
<!--         <li class="inline-block align-middle">-->
<!--           <a href="#" class="block text-lg border-b-2 border-orange p-3">Road Bikes</a>-->
<!--         </li>-->
<!--         <li class="inline-block align-middle">-->
<!--           <a href="#" class="block text-lg border-b-2 border-transparent p-3 hover:border-orange">Mountain Bikes</a>-->
<!--         </li>-->
<!--         <li class="inline-block align-middle">-->
<!--           <a href="#" class="block text-lg border-b-2 border-transparent p-3 hover:border-orange">Electric Bikes</a>-->
<!--         </li>-->
<!--       </ol>-->
<!--     </div>-->
<!--   </nav>-->
   <div class="app" id="app">
     <HeaderL v-if="showNav"></HeaderL>
     <Header v-else></Header>
     <router-view/>
     <Footer></Footer>
   </div>
 </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/header'
import HeaderL from '@/components/header_l'
import Footer from "@/components/footer/index";

export default {
  components: {
    Footer,
    Header,
    HeaderL,
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>