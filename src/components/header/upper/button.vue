<template>
  <v-btn class="lowercased tersier--text" :href="href" small depressed text tile>
    <v-icon v-if="typeof icon !== 'undefined'" left small>{{icon}}</v-icon>
    {{text}}
  </v-btn>
</template>

<script>
export default {
  name: 'HeaderUpperButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style scoped>
  .lowercased {
    text-transform: none !important;
  }
</style>