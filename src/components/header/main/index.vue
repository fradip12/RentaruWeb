<template>
  <div class="primary">
    <v-container>
      <v-row align="center" align-content="stretch" dense>
        <h1 class="tersier--text" onclick="window.location.href = '/'">RENTARU</h1>
        <div class="pl-2 pr-2"></div>
        <SearchBar></SearchBar>
        <div class="pl-2 pr-2"></div>
        <div class="d-flex flex-row mt-2">
          <IconButton
              v-for="item in iconButtons"
              :key="item.icon"
              :icon="item.icon"
              :value="item.value"
              :href="item.href"
          >
          </IconButton>

          <div class="pl-2 pr-2"></div>


          <Button
              v-for="item in buttons"
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

export default {
  name: "HeaderMain",
  components: {
    Button,
    IconButton,
    SearchBar
  },
  data: () => ({
    iconButtons: [
      // {
      //   icon: "mdi-cart",
      //   value: 5,
      //   href: "/"
      // },
      // {
      //   icon: "mdi-message-text",
      //   href: "/"
      // },

      // {
      //   icon: "mdi-bell",
      //   href: "/under_construction"
      // },
      // {
      //   icon: "mdi-account",
      //   href: "/profile"
      // }
    ],
    buttons: [
      {
        text: "Masuk",
        href: "/login"
      },
      {
        text: "Daftar",
        href: "/register"
      }
    ]
  })
};
</script>