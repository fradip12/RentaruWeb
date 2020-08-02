<template>
  <div style="background: #ee4000">
    <v-container class="border border-primary">
      <v-row class="flex-column flex-sm-row">
        <v-col>
          <h3 style="display: inline; color: white">RENTARU &#169;2020</h3>
          <div style="margin-top: 1vw"/>
          <v-container>
            <v-row>
              <v-col cols="6">
                <Hyperlink
                    :text="links[0].text"
                    :href="links[0].href"
                ></Hyperlink>
                <br/>
                <Hyperlink
                    :text="links[1].text"
                    :href="links[1].href"
                ></Hyperlink>
              </v-col>
              <v-col cols="6">
                <Hyperlink
                    :text="links[2].text"
                    :href="links[2].href"
                ></Hyperlink>
                <br/>
                <Hyperlink
                    :text="links[3].text"
                    :href="links[3].href"
                ></Hyperlink>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <h3 style="display: inline; color: white">IKUTI KAMI</h3>
          <div style="margin-top: 1vw"/>
          <IconButton
              v-for="item in mediaIcons"
              class="mr-4"
              :key="item.icon"
              :icon="item.icon"
              :href="item.href"
          >
          </IconButton>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import Hyperlink from "./hyperlink";
import IconButton from "./icon-button";

export default {
  name: "Footer",
  components: {
    Hyperlink,
    IconButton
  },
  data: () => ({
    mediaIcons: [
      {
        icon: "mdi-facebook",
        href: "/"
      },
      {
        icon: "mdi-twitter",
        href: "/"
      },
      {
        icon: "mdi-instagram",
        href: "/"
      },
      {
        icon: "mdi-email",
        href: "/"
      },
      {
        icon: "mdi-linkedin",
        href: "/"
      }
    ],
    links: [
      {
        text: "Tentang Rentaru",
        href: "/"
      },
      {
        text: "Frequently Asked Question",
        href: "/"
      },
      {
        text: "Ketentuan Hukum",
        href: "/"
      },
      {
        text: "Kebijakan Privasi",
        href: "/"
      }
    ]
  }),

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>