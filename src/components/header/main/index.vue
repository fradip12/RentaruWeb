<template>
  <div class="primary">
    <v-container>
      <v-row align="center" align-content="stretch" dense>
        <h1 class="tersier--text" onclick="window.location.href = '/'">
          RENTARU
        </h1>

        <v-menu
          v-for="button in tombol"
          :close-on-content-click="content_click_option"
          :key="button"
        >
          <template #activator="{ on: menu }" v-show="button.options">
            <v-btn color="info" icon small flat v-on="{ ...tooltip, ...menu }">
              <v-icon>{{ button.icon }}</v-icon>
            </v-btn>
          </template>
          <temmplate v-if="content_click_option" v-show="!button.options">
            <v-tooltip bottom>
              <template #activator="{ on: tooltip }">
                <v-btn color="info" icon small flat v-on="{ ...tooltip }">
                  <v-icon>{{ button.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ button.title }}</span>
            </v-tooltip>
          </temmplate>
          <v-list v-show="button.options">
            <v-list-tile
              v-for="item in button.options"
              :key="item.id"
              @click="
                item.options
                  ? (content_click_option = false)
                  : (content_click_option = true)
              "
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="item.options">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-x
                >
                  <template v-slot:activator="{ on }">
                    <v-icon v-on="on" color="info" small @click="menu = true"
                      >fa-chevron-right</v-icon
                    >
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title>John Leider</v-list-tile-title>
                          <v-list-tile-sub-title
                            >Founder of Vuetify.js</v-list-tile-sub-title
                          >
                        </v-list-tile-content>

                        <v-list-tile-action>
                          <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                          >
                            <v-icon>favorite</v-icon>
                          </v-btn>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-title>Enable messages</v-list-tile-title>
                      </v-list-tile>

                      <v-list-tile>
                        <v-list-tile-action>
                          <v-switch v-model="hints" color="purple"></v-switch>
                        </v-list-tile-action>
                        <v-list-tile-title>Enable hints</v-list-tile-title>
                      </v-list-tile>
                    </v-list>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn flat @click="menu = false">Cancel</v-btn>
                      <v-btn color="primary" flat @click="menu = false"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- <v-menu open-on-hover offset-y :close-on-content-click="false">
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
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
              open-on-hover
            >
              <template v-slot:activator="{ on }">
                <v-list-item
                  v-for="n in 12"
                  :key="n"
                  v-on="on"
                  @click="menu = true"
                >
                  <v-list-item-title>Test</v-list-item-title>

                  <v-list-item-action>
                    <v-icon color="black">mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </template>

              <v-list-item v-for="n in 12" :key="n">
                <v-list-item-title>Test</v-list-item-title>

                <v-list-item-action>
                  <v-icon color="black">mdi-chevron-right</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-menu>

            end of list item
          </v-list>
        </v-menu> -->
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