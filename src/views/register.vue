<template>
  <v-app>
    <v-container
      class="fill-height min-fill-height pa-3"
      style="background-color: #ee4000;"
      fluid
    >
      <v-row class="justify-center">
        <v-card class="full-width">
          <v-container class="pa-sm-8">
            <div class="text-h6 my-2 mt-8 text-center">Register</div>
            <v-text-field
              placeholder="Nama"
              outlined
              rounded
              full-width
              dense
            />

            <v-text-field
              placeholder="Email"
              outlined
              rounded
              full-width
              dense
            />

            <v-text-field
              placeholder="No. Handphone"
              outlined
              rounded
              full-width
              dense
            />

            <v-text-field
              placeholder="Password"
              outlined
              rounded
              full-width
              dense
            />

            <v-text-field
              placeholder="Konfirmasi Password"
              outlined
              rounded
              full-width
              dense
            />

            <v-btn
              class="tersier--text mb-8"
              color="primary"
              rounded
              width="100%"
              href="/blank"
            >
              Register
            </v-btn>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.full-width {
  width: 95%;
  max-width: 400px;
}
</style>

<script>
export default {
  name: "Register",
};
</script>