<template>
  <div class="primary">
    <v-container>
      <v-row align="center" align-content="stretch" dense>
        <router-link to="/" class="navbar-brand tersier--text text-h3" style="text-decoration: none; color: inherit;">
          RENTARU
        </router-link>
        <!--        <h1 class="tersier&#45;&#45;text" onclick="window.location.href = '/'">RENTARU</h1>-->
        <div class="pl-2 pr-2"></div>
        <SearchBar></SearchBar>
        <div class="pl-2 pr-2"></div>
        <div class="d-flex flex-row mt-2">

          <div class="pl-2 pr-2"></div>
          <IconButton v-for="item in getData('iconButton', user.loggedIn)"
                      :key="item.key"
                      :icon="item.icon"
                      :href="item.href"
          ></IconButton>
          <div style="width: 1vw;"/>
          <Button
              v-for="item in getData('button', user.loggedIn)"
              :key="item.text"
              :text="item.text"
              :href="item.href">
          </Button>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from "./button";
import IconButton from "./icon-button";
import SearchBar from "./search-bar";
import {mapGetters} from "vuex";

export default {
  name: "HeaderMain",
  components: {
    Button,
    IconButton,
    SearchBar
  },
  data: () => ({
    iconButtons: [
      {
        key: "jahbfhkdafa",
        icon: "mdi-account",
        href: "/profile",
        need_auth: true,
      }
    ],
    buttons: [
      {
        text: "Masuk",
        href: "/login",
        need_auth: false,
      },
      {
        text: "Daftar",
        href: "/register",
        need_auth: false,
      },
      {
        text: "Pasang Iklan",
        href: "/",
        need_auth: true,
      }
    ]
  }),
  methods: {
    getData(param, authStatus) {
      if (param === "iconButton") {
        return this.iconButtons.filter(value => value.need_auth === authStatus);
      } else if (param === "button") {
        return this.buttons.filter(value => value.need_auth === authStatus);
      } else {
        return null;
      }
    },
  },
  computed: {

    ...mapGetters({
      user: "user"
    })
  },
};
</script>