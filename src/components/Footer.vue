<template>
  <div class="primary mt-32">
    <v-container class="accent--text">
      <v-row>
        <v-col cols="6">
          <h2 style="display: inline;">RENTARU</h2>
          <h4 style="display: inline;">&#169;2020</h4>
          <v-row>
            <v-col cols="6">
              <Hyperlink :text="links[0].text" :href="links[0].href"></Hyperlink>
              <br>
              <Hyperlink :text="links[1].text" :href="links[1].href"></Hyperlink>
            </v-col>
            <v-col cols="6">
              <Hyperlink :text="links[2].text" :href="links[2].href"></Hyperlink>
              <br>
              <Hyperlink :text="links[3].text" :href="links[3].href"></Hyperlink>
            </v-col>
          </v-row>
        </v-col>
        <v-col offset="2" cols="4">
          <h2 class="mb-4">Ikuti Kami:</h2>
          <IconButton v-for="item in mediaIcons" class="mr-4"
            :key="item.icon" :icon="item.icon" :href="item.href">
          </IconButton>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Hyperlink from './footer/Hyperlink.vue';
import IconButton from './footer/IconButton.vue';

export default {
  name: 'Footer',
  components: {
    Hyperlink,
    IconButton,
  },
  data: () => ({
    mediaIcons: [
      {
        icon: 'mdi-facebook',
        href: '/',
      },
      {
        icon: 'mdi-twitter',
        href: '/',
      },
      {
        icon: 'mdi-instagram',
        href: '/',
      },
      {
        icon: 'mdi-email',
        href: '/',
      },
      {
        icon: 'mdi-linkedin',
        href: '/',
      },
    ],
    links: [
      {
        text: 'Tentang Rentaru',
        href: '/',
      },
      {
        text: 'Frequently Asked Question',
        href: '/',
      },
      {
        text: 'Ketentuan Hukum',
        href: '/',
      },
      {
        text: 'Kebijakan Privasi',
        href: '/',
      },
    ],
  }),
};
</script>