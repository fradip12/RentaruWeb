<template>
  <v-container>
    <v-row no-gutters>
      <v-avatar size="80">
        <img src="../../assets/item2.jpg" />
      </v-avatar>

      <v-col class="mx-4 my-3">
        <div class="font-weight-bold text-h6">Martha Christina</div>
        <div class="text-body-1 grey--text">Anggota sejak 2020</div>
      </v-col>

      <v-icon class="mx-3" color="quarter" size="60">fab fa-whatsapp</v-icon>
      <v-icon class="mx-3" color="quarter" size="60">fab fa-facebook</v-icon>
      <v-icon class="mx-3" color="quarter" size="60">fab fa-line</v-icon>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserProfile"
};
</script>