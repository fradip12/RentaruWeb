<template>
  <a class="no-underscored white--text" :href="href">{{text}}</a>
</template>

<script>
export default {
  name: 'FooterHyperlink',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style scoped>
.no-underscored {
  text-decoration: none;
}
</style>