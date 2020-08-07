<template>
  <div class="secondary tersier--text">
    <v-container class="pt-0 pb-0">
      <v-row align="center" dense>
        <Button v-for="item in leftButtons" :key="item.text"
          :text="item.text" :icon="item.icon" :href="item.href">
        </Button>
<!--        <v-spacer></v-spacer>-->
        <Button v-for="item in getRightButtons" :key="item.text"
          :text="item.text" :icon="item.icon" :href="item.href">
        </Button>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from './button';

export default {
  name: 'HeaderUpper',
  components: {
    Button,
  },
  data: () => ({
    leftButtons: [
      {
        text: 'Unduh Aplikasi Rentaru',
        icon: 'mdi-cellphone',
        href: '/',
      },
    ],
    rightButtons: [
      {
        text: 'Hubungi Kami',
        href: '/',
        need_desktop: true,
      },
      {
        text: 'Bantuan',
        href: '/',
        need_desktop: false,
      },
      {
        text: 'Bahasa',
        href: '/',
        need_desktop: true,
      },
    ]
  }),
  computed: {
    getRightButtons() {
      if (this.width >= 900) {
        return this.rightButtons;
      } else {
        return this.rightButtons.filter(value => value.need_desktop === false);
      }
    },
    width() {
      return screen.width;
    },
  }
};
</script>