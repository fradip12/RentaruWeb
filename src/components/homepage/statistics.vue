<template>
  <v-container
    class="min-fill-height d-flex container-relative"
    style="
      background-image: linear-gradient(to bottom right, #ce3800, #fe7442);
    "
    fluid
  >
    <v-row
      no-gutters
      class="justify-center align-content-center max-width center-row"
    >
      <v-col>
        <statistics-item
          iconName="fas fa-users"
          statsNumber="391"
          statsTitle="Penyedia Sewa"
        />
        <div style="height: 10vw;"></div>
        <statistics-item
          iconName="fas fa-box-open"
          statsNumber="4947"
          statsTitle="Produk Ditawarkan"
        />
      </v-col>
      <v-col>
        <statistics-item
          iconName="fas fa-search"
          statsNumber="28.162"
          statsTitle="Penyewa"
        />
        <div style="height: 10vw;"></div>
        <statistics-item
          iconName="fas fa-handshake"
          statsNumber="41.503"
          statsTitle="Transaksi Dilakukan"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatisticsItem from "./statistics-item";

export default {
  name: "Statistics",
  components: {
    StatisticsItem,
  },

  computed: {
    width() {
      return screen.width;
    },
  },
};
</script>