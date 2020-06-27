<template>
  <v-btn icon color="tersier" :href="href">
    <v-badge v-if="typeof value === 'number'" :content="value" color="secondary" overlap>
      <v-icon>{{icon}}</v-icon>
    </v-badge>
    <v-icon v-else>{{icon}}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'HeaderMainIconButton',
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
    },
    href: {
      type: String,
    },
  },
};
</script>