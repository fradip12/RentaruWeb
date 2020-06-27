<template>
  <div class="primary">
    <v-container>
      <v-row align="center" dense>
        <h1 class="tersier--text">RENTARU</h1>
        <div class="pl-2 pr-2"></div>
        <SearchBar></SearchBar>
        <div class="pl-2 pr-2"></div>
        <IconButton v-for="item in iconButtons" :key="item.icon"
          :icon="item.icon" :value="item.value" :href="item.href">
        </IconButton>
        <div class="pl-2 pr-2"></div>
        <Button v-for="item in buttons" :key="item.text"
          :text="item.text" :href="item.href">
        </Button>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from './main/Button.vue';
import IconButton from './main/IconButton.vue';
import SearchBar from './main/SearchBar.vue';

export default {
  name: 'HeaderMain',
  components: {
    Button,
    IconButton,
    SearchBar,
  },
  data: () => ({
    iconButtons: [
      {
        icon: 'mdi-cart',
        value: 5,
        href: '/',
      },
      {
        icon: 'mdi-message-text',
        href: '/',
      },
      {
        icon: 'mdi-bell',
        href: '/',
      },
      {
        icon: 'mdi-account',
        href: '/',
      },
    ],
    buttons: [
      {
        text: 'Pasang Iklan',
        href: '/',
      }
    ]
  }),
};
</script>