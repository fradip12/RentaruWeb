
<template>
  <div class="elevation-2">
    <Upper></Upper>
    <Main></Main>
  </div>
</template>

<script>
import Main from './header/Main.vue';
import Upper from './header/Upper.vue';

export default {
  name: 'Header',
  components: {
    Main,
    Upper,
  },
};
</script>