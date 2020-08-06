<template>
  <div id="login">
    <div style="height: 10vh"></div>
    <div :class="{ 'signup-form': !showLoginForm }">
      <v-container
          class="fill-height min-fill-height pa-3 justify-center"
          fluid
      >
        <v-row class="justify-center">
          <v-card class="full-width" rounded>
            <v-container class="pa-sm-8">
              <form v-if="showLoginForm" @submit.prevent>
                <div class="text-h6 my-2 mt-8 text-center">Masuk</div>
                <!--Email-->
                <v-text-field
                    placeholder="Email"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="loginForm.email" type="text" id="email1"
                />
                <!--Password-->
                <v-text-field
                    placeholder="Password"
                    outlined
                    rounded
                    full-width
                    dense
                    v-model.trim="loginForm.password" type="password" id="password1"
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
                  <a @click="togglePasswordReset()">Lupa Password?</a>
                  <div style="height: 10px"/>
                  <a @click="toggleForm()">Buat Akun Baru</a>
                </div>
              </form>
              <form v-else @submit.prevent>
                <div class="text-h6 my-2 mt-8 text-center">Buat Akun Baru</div>

                <!--Name-->
                <v-text-field
                    placeholder="Nama"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="signupForm.name" type="text" id="name"
                />

                <!--Email-->
                <v-text-field
                    placeholder="Email"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="signupForm.email" type="text" id="email2"
                />

                <!--Password-->
                <v-text-field
                    placeholder="Kata Sandi"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="signupForm.password" type="password" id="password2"
                />

                <!--Confirm Password-->
                <v-text-field
                    placeholder="Ulangi Kata Sandi"
                    rounded
                    outlined
                    full-width
                    dense
                    v-model.trim="signupForm.confirm_password" type="password" id="password22"
                />

                <v-btn
                    class="tersier--text"
                    color="primary"
                    rounded
                    width="100%"
                    @click="signup()"
                >
                  Buat Akun
                </v-btn>
                <div class="grey--text text-subtitle-2 text-center my-4 extras">
                  <a @click="toggleForm()">Kembali ke Halaman Login</a>
                </div>
              </form>





              <!--            <div class="grey&#45;&#45;text text-subtitle-2 text-center my-4">-->
              <!--              Lupa Password-->
              <!--            </div>-->
              <!--            <section>-->
              <!--              <div :class="{ 'signup-form': !showLoginForm }">-->
              <!--                <form v-if="showLoginForm" @submit.prevent>-->
              <!--                  <h1>Selamat datang Kembali</h1>-->
              <!--                  <div>-->
              <!--                    <label for="email1">Email</label>-->
              <!--                    <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1"/>-->
              <!--                  </div>-->
              <!--                  <div>-->
              <!--                    <label for="password1">Password</label>-->
              <!--                    <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1"/>-->
              <!--                  </div>-->
              <!--                  <button @click="login()" class="button">Masuk</button>-->
              <!--                  <div class="extras">-->
              <!--                    <a @click="togglePasswordReset()">Lupa Password?</a>-->
              <!--                    <a @click="toggleForm()">Buat Akun Baru</a>-->
              <!--                  </div>-->
              <!--                </form>-->
              <!--                <form v-else @submit.prevent>-->
              <!--                  <h1>Selamat datang di Rentaru!</h1>-->
              <!--                  <div>-->
              <!--                    <label for="name">Nama</label>-->
              <!--                    <input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name"/>-->
              <!--                  </div>-->
              <!--                  <div>-->
              <!--                    <label for="email2">Email</label>-->
              <!--                    <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2"/>-->
              <!--                  </div>-->
              <!--                  <div>-->
              <!--                    <label for="password2">Password</label>-->
              <!--                    <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters"-->
              <!--                           id="password2"/>-->
              <!--                  </div>-->
              <!--                  <button @click="signup()" class="button">Sign Up</button>-->
              <!--                  <div class="extras">-->
              <!--                    <a @click="toggleForm()">Back to Log In</a>-->
              <!--                  </div>-->
              <!--                </form>-->
              <!--              </div>-->
              <!--            </section>-->
            </v-container>
          </v-card>
        </v-row>
      </v-container>
    </div>
    <div style="height: 25vh"></div>
    <!--    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>-->
    <!--    <section>-->
    <!--      <div :class="{ 'signup-form': !showLoginForm }" class="col2">-->
    <!--        <form v-if="showLoginForm" @submit.prevent>-->
    <!--          <h1>Selamat datang Kembali</h1>-->
    <!--          <div>-->
    <!--            <label for="email1">Email</label>-->
    <!--            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />-->
    <!--          </div>-->
    <!--          <div>-->
    <!--            <label for="password1">Password</label>-->
    <!--            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />-->
    <!--          </div>-->
    <!--          <button @click="login()" class="button">Masuk</button>-->
    <!--          <div class="extras">-->
    <!--            <a @click="togglePasswordReset()">Lupa Password?</a>-->
    <!--            <a @click="toggleForm()">Buat Akun Baru</a>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--        <form v-else @submit.prevent>-->
    <!--          <h1>Selamat datang di Rentaru!</h1>-->
    <!--          <div>-->
    <!--            <label for="name">Nama</label>-->
    <!--            <input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name" />-->
    <!--          </div>-->
    <!--          <div>-->
    <!--            <label for="email2">Email</label>-->
    <!--            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />-->
    <!--          </div>-->
    <!--          <div>-->
    <!--            <label for="password2">Password</label>-->
    <!--            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />-->
    <!--          </div>-->
    <!--          <button @click="signup()" class="button">Sign Up</button>-->
    <!--          <div class="extras">-->
    <!--            <a @click="toggleForm()">Back to Log In</a>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </section>-->
  </div>
</template>

<style scoped>
.full-width {
  width: 95%;
  max-width: 400px;
}
</style>

<script>
// import PasswordReset from '@/components/PasswordReset'
// import Footer from "@/components/footer";

export default {
  name: "Login",
  components: {
    // PasswordReset,
    // Footer,
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: '',
        re_enter_password: '',
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        confirm_password: this.signupForm.confirm_password,
        name: this.signupForm.name,
        title: this.signupForm.title
      })
    }
  },
  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>


<!--<template>-->
<!--  <v-app>-->
<!--    <v-container-->
<!--        class="fill-height min-fill-height pa-3"-->
<!--        fluid-->
<!--    >-->
<!--      <v-row class="justify-center">-->
<!--        <v-card class="full-width">-->
<!--          <v-container class="pa-sm-8">-->
<!--            <div class="text-h6 my-2 mt-8 text-center">Login</div>-->
<!--            <v-text-field-->
<!--                placeholder="Username/Email/No. Handphone"-->
<!--                outlined-->
<!--                rounded-->
<!--                full-width-->
<!--                dense-->
<!--            />-->

<!--            <v-text-field-->
<!--                placeholder="Password"-->
<!--                outlined-->
<!--                rounded-->
<!--                full-width-->
<!--                dense-->
<!--            />-->

<!--            <v-btn-->
<!--                class="tersier&#45;&#45;text"-->
<!--                color="primary"-->
<!--                rounded-->
<!--                width="100%"-->
<!--                href="/l"-->
<!--            >-->
<!--              Login-->
<!--            </v-btn>-->

<!--            <div class="grey&#45;&#45;text text-subtitle-2 text-center my-4">-->
<!--              Lupa Password-->
<!--            </div>-->
<!--          </v-container>-->
<!--        </v-card>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--    <Footer></Footer>-->
<!--  </v-app>-->
<!--</template>-->

<!--<style scoped>-->
<!--.full-width {-->
<!--  width: 95%;-->
<!--  max-width: 400px;-->
<!--}-->
<!--</style>-->

<!--<script>-->

<!--import Footer from "@/components/footer";-->

<!--export default {-->
<!--  name: "Login",-->
<!--  components: {-->
<!--    Footer,-->
<!--  },-->

<!--  computed: {-->
<!--    width() {-->
<!--      return screen.width;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->