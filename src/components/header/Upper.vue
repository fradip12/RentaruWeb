<template>
  <div class="secondary tersier--text">
    <v-container class="pt-0 pb-0">
      <v-row align="center" dense>
        <UpperButton v-for="item in leftButtons" :key="item.text"
          :text="item.text" :icon="item.icon" :href="item.href">
        </UpperButton>
        <v-spacer></v-spacer>
        <UpperButton v-for="item in rightButtons" :key="item.text"
          :text="item.text" :icon="item.icon" :href="item.href">
        </UpperButton>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UpperButton from './upper/Button.vue';

export default {
  name: 'HeaderUpper',
  components: {
    UpperButton,
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