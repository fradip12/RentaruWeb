<template>
  <div class="primary">
    <v-container>
      <v-row align="center" align-content="stretch" dense>
        <template v-if="width >= 900">
          <router-link
            to="/"
            class="navbar-brand tersier--text text-h3"
            style="text-decoration: none; color: inherit;"
          >
            RENTARU
          </router-link>
        </template>

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

          <v-card width="100vw" class="mx-auto">
            <v-container>
              <v-row>
                <!-- main kategori -->
                <v-col class="border">
                  <v-list>
                    <v-list-item-group v-model="selectedMenu">
                      <v-list-item
                        v-for="kat in kategori"
                        :key="kat.id"
                        @mouseover="selectedMenu = kat.id"
                      >
                        <v-list-item-content>
                          <v-list-item-title>{{ kat.text }}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-icon color="black">mdi-chevron-right</v-icon>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
                <!-- end of main kategori -->

                <!-- subkat -->
                <v-col cols="10" v-if="width >= 600">
                  <v-list>
                    <v-list-item
                      v-for="subkat in subkat[selectedMenu]"
                      :key="subkat.id"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ subkat.text }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <!-- end of subkat -->
              </v-row>
            </v-container>
          </v-card>
        </v-menu>
        <!-- menu -->

        <div class="pl-2 pr-2"></div>
        <template v-if="width <= 600">
          <div style="width: 65vw;">
            <SearchBar />
          </div>
        </template>
        <template v-else>
          <SearchBar />
        </template>
        <div style="width: 1vw;" />
        <!--        <div class="pl-2 pr-2"></div>-->
        <div class="d-flex flex-row">
          <!--          <div class="pl-2 pr-2"></div>-->

          <IconButton
            v-for="item in getData('iconButton', user.loggedIn)"
            :key="item.key"
            :icon="item.icon"
            :href="item.href"
          ></IconButton>
          <div style="width: 1vw;" />

          <Button
            v-for="item in getData('button', user.loggedIn)"
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
import { mapGetters } from "vuex";

export default {
  name: "HeaderMain",
  components: {
    Button,
    IconButton,
    SearchBar,
  },
  data: () => ({
    homeIcon: require("@/assets/home-32.png"),
    iconButtons: [
      {
        key: "jahbfhkdafa",
        icon: "mdi-account",
        href: "/profile",
        need_auth: true,
      },
    ],
    buttons: [
      {
        text: "MASUK",
        href: "/login",
        need_auth: false,
      },
      // {
      //   text: "Daftar",
      //   href: "/register",
      //   need_auth: false,
      // },
      {
        text: "Pasang Iklan",
        href: "/",
        need_auth: true,
      },
    ],
    selectedMenu: 0,
    kategori: [
      { id: 0, text: "kategori 1" },
      { id: 1, text: "kategori 2" },
      { id: 2, text: "kategori 3" },
    ],
    subkat: [
      [
        { id: 0, text: "kategori 1.1" },
        { id: 1, text: "kategori 1.2" },
        { id: 2, text: "kategori 1.3" },
        { id: 3, text: "kategori 1.4" },
        { id: 4, text: "kategori 1.5" },
      ],
      [
        { id: 0, text: "kategori 2.1" },
        { id: 1, text: "kategori 2.2" },
        { id: 2, text: "kategori 2.3" },
        { id: 3, text: "kategori 2.4" },
        { id: 4, text: "kategori 2.5" },
      ],
      [
        { id: 0, text: "kategori 3.1" },
        { id: 1, text: "kategori 3.2" },
        { id: 2, text: "kategori 3.3" },
        { id: 3, text: "kategori 3.4" },
        { id: 4, text: "kategori 3.5" },
      ],
    ],
  }),
  methods: {
    getData(param, authStatus) {
      if (param === "iconButton") {
        return this.iconButtons.filter(
          (value) => value.need_auth === authStatus
        );
      } else if (param === "button") {
        return this.buttons.filter((value) => value.need_auth === authStatus);
      } else {
        return null;
      }
    },
  },

  computed: {
    width() {
      return screen.width;
    },
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>