<template>
  <div class="secondary tersier--text">
    <v-container class="pt-0 pb-0">
      <v-row align="center" dense>
        <Button v-for="item in leftButtons" :key="item.text"
          :text="item.text" :icon="item.icon" :href="item.href">
        </Button>
        <v-spacer></v-spacer>
        <Button v-for="item in rightButtons" :key="item.text"
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
      },
      {
        text: 'Bantuan',
        href: '/',
      },
      {
        text: 'Bahasa',
        href: '/',
      },
    ]
  }),
};
</script>