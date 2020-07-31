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
            <div class="text-h6 my-2 mt-8 text-center">Login</div>
            <v-text-field
              placeholder="Username/Email/No. Handphone"
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

            <v-btn
              class="tersier--text"
              color="primary"
              rounded
              width="100%"
              href="/blank"
            >
              Login
            </v-btn>

            <div class="grey--text text-subtitle-2 text-center my-4">
              Lupa Password
            </div>
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
  name: "Login",
};
</script>