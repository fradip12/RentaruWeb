<template>
  <v-container
    class="container-relative d-flex justify-center "
    style="width: 300px;"
  >
    <v-icon size="250" color="rgba(0,0,0,0.3)">{{ iconName }}</v-icon>
    <div class="stats-center">
      <div class="white--text text-h2 ">{{ statsNumber }}</div>
      <div class="white--text text-h4 mt-10 ">{{ statsTitle }}</div>
    </div>
  </v-container>
</template>

<script>
import "../../stylesheet/statistics-item.css";

export default {
  name: "StatisticsItem",
  props: {
    iconName: String,
    statsNumber: String,
    statsTitle: String
  }
};
</script>