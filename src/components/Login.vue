<template>
  <div id="login" :style="{backgroundImage: bgPath,
  background: bgPath}">
    <div style="height: 10vh"></div>
    <div>
      <v-container
          class="fill-height min-fill-height pa-3 justify-center"
          fluid>
        <v-row class="justify-center">
          <v-card class="full-width" rounded>
            <v-container class="pa-sm-8">
              <form @submit.prevent>
                <div class="text-h6 my-2 mt-8 text-center">Masuk</div>
                <!--Email-->
                <v-text-field
                    placeholder="Email"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="form.email"
                    type="text"
                    id="email1"
                />
                <!--Password-->
                <v-text-field
                    placeholder="Password"
                    outlined
                    rounded
                    full-width
                    dense
                    v-model.trim="form.password" type="password" id="password1"
                />

                <v-btn
                    class="tersier--text"
                    color="primary"
                    rounded
                    width="100%"
                    @click="login()"
                >
                  Login
                </v-btn>
                <div style="height: 1px"/>
                <div class="grey--text text-subtitle-2 text-center my-4 extras">
                  <a @click="goToEvents('Home')">Lupa Password?</a>
                  <div style="height: 10px"/>
                  <a @click="goToEvents('Register')">Buat Akun Baru</a>
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
  name: "Login",
  data() {
    return {
      bgPath: require('@/assets/bg_auth.jpg'),
      form: {
        email: '',
        password: '',
      },
      error: null
    };
  },
  methods: {
    login() {
      auth
          .signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
            this.$router.replace({name: 'Home'});
          })
          .catch(err => {
            this.error = err.message;
          })
    },
    goToEvents(param) {
      this.$router.replace({name: param});

    }
  },
}
</script>

<style scoped>

</style>