<template>
  <div class="primary">
    <v-container>
      <v-row align="center" align-content="stretch" dense>
        <h1 class="tersier--text" onclick="window.location.href = '/'">
          RENTARU
        </h1>

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="px-4 tersier--text font-weight-medium"
              v-bind="attrs"
              v-on="on"
              >Kategori</v-btn
            >
          </template>

          <v-list>
            <v-list-item
              v-for="n in 12"
              :key="n"
              v-on="on"
              @click="menu = true"
            >
              <v-list-item-content>
                <v-list-item-title>Test</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon color="black">mdi-chevron-right</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
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
            :href="item.href"
          >
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
    SearchBar,
  },
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    content_click_option: false,
    tombol: [
      {
        id: "options",
        title: "More Options",
        icon: "fas fa-bars",
        action: "",
        options: [
          { id: "dictionary", title: "Dictionary", action: "" },
          { id: "visualization", title: "Data Visualization", action: "" },
          { id: "password", title: "Change Password", action: "" },
          { id: "license", title: "License Info", action: "" },
          {
            id: "tools",
            title: "Tools",
            action: "",
            options: [{ id: "calculator", title: "Hex to ASCII calculator" }],
          },
          { id: "checkup", title: "Checkup Report", action: "" },
          { id: "system", title: "System Monitoring", action: "" },
          { id: "db", title: "Database Management", action: "" },
        ],
      },
      {
        id: "reports",
        title: "Reports",
        icon: "fas fa-chart-line",
        action: "",
      },
      {
        id: "help",
        title: "Help Options",
        icon: "fas fa-question-circle",
        action: "",
        options: [
          { id: "user", title: "User Guide", action: "" },
          { id: "admin", title: "Admin Guide", action: "" },
        ],
      },
      { id: "settings", title: "Settings", icon: "fas fa-cog", action: "" },
      { id: "logout", title: "Logout", icon: "fas fa-power-off", action: "" },
    ],
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
        href: "/login",
      },
      {
        text: "Daftar",
        href: "/register",
      },
    ],
  }),
};
</script>