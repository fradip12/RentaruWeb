<template>
  <div id="register">
    <div style="height: 10vh"></div>
    <div>
      <v-container
          class="fill-height min-fill-height pa-3 justify-center"
          fluid>
        <v-row class="justify-center">
          <v-card class="full-width" rounded>
            <v-container class="pa-sm-8">
              <form>
                <div class="text-h6 my-2 mt-8 text-center">Buat Akun Baru</div>

                <!--Name-->
                <v-text-field
                    placeholder="Nama"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="form.name" type="text" id="name"
                />

                <!--Email-->
                <v-text-field
                    placeholder="Email"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="form.email" type="text" id="email"
                />

                <!--Password-->
                <v-text-field
                    placeholder="Kata Sandi"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="form.password" type="password" id="password"
                />

                <!--Confirm Password-->
                <v-text-field
                    placeholder="Ulangi Kata Sandi"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="form.confirm_password" type="password" id="confirm_password"
                />

                <v-btn
                    class="tersier--text"
                    color="primary"
                    rounded
                    width="100%"
                    @click="signUp()"
                >
                  Buat Akun
                </v-btn>
                <div class="grey--text text-subtitle-2 text-center my-4 extras">
                  <a @click="goToEvents('Login')">Kembali ke Halaman Login</a>
                </div>
              </form>
            </v-container>
          </v-card>
        </v-row>
      </v-container>
    </div>
    <div style="height: 25vh"></div>
  </div>
</template>

<script>
import {auth} from "@/firebase";

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      error: null
    };
  },
  methods: {
    signUp() {
      if (this.form.password === this.form.confirm_password) {
        auth
            .createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
              data.user
                  .updateProfile({
                    displayName: this.form.name
                  })
                  .then(() => {
                  });
            })
            .catch(err => {
              this.error = err.message;
            });
      }
    },
    goToEvents(location) {
      this.$router.replace({name: location});
    }
  }
};
</script>

<style scoped>

</style>