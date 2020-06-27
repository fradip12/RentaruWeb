<template>
  <v-btn :href="href" color="tersier" fab depressed small>
    <v-icon color="primary">{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'FooterIconButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
  }
};
</script>