
<template>
  <div class="elevation-2">
    <Upper></Upper>
    <Main></Main>
  </div>
</template>

<script>
import Main from './main';
import Upper from './upper';

export default {
  name: 'HeaderL',
  components: {
    Main,
    Upper,
  },
};
</script>