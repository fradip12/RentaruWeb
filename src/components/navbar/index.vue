<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="elevation-2">
      <Upper></Upper>
      <Main></Main>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from "vuex";
import {auth} from "@/firebase";
import Main from './main';
import Upper from './upper';

export default {
  name: "Navbar",
  components: {
    Main,
    Upper,
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      auth
          .signOut()
          .then(() => {
            this.$router.replace({
              name: "home"
            });
          });
    }
  }
};
</script>

<style scoped>

</style>