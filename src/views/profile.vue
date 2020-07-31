<template>
  <v-app>
    <v-main>
      <Header></Header>
      <div class="pt-8">
        <v-container>
          <h1>Profil Anda</h1>
          <v-row class="d-flex flex-column flex-sm-row">
            <v-col :cols="width >= 960 ? '4' : false">
              <div class="tersier rounded-lg">
                <v-container>
                  <div style="text-align: center;">
                    <div style="  position: relative;">
                      <v-avatar size="75%" class="mt-6 mb-6">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                      </v-avatar>
                      <v-btn
                        color="primary"
                        fab
                        depressed
                        small
                        style="position: absolute; bottom: 10%; right: 25%;"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </div>
                    <h2 class="primary--text">"Srikandi Nusantara"</h2>
                    <h5 class="primary--text">"Bergabung sejak 2019"</h5>
                  </div>
                </v-container>
                <v-container style="width: 80%">

                  <v-btn class="primary--text" outlined tile width="100%">
                    <v-icon left small>mdi-shield-check</v-icon>
                    Akun Terverifikasi
                  </v-btn>

                  <div class="mt-4 mb-4"></div>

                  <v-btn class="primary--text" outlined tile width="100%" rounded>
                    <v-icon left small>mdi-medal</v-icon>
                    Akun Premium
                  </v-btn>
                  <div class="mt-2 mb-2"></div>
                  <v-row>
                    <v-spacer></v-spacer>
                    <v-btn class="primary--text" x-small depressed text>
                      <v-icon left small>mdi-arrow-up-circle-outline</v-icon>
                      Upgrade Packet
                    </v-btn>
                  </v-row>
                </v-container>
              </div>
              <div class="mt-4 mb-4"></div>
              <v-container style="width: 70%;">
                <v-btn
                  class="tersier--text"
                  color="primary"
                  depressed
                  tile
                  width="100%"
                >
                  Lihat Iklan Saya
                </v-btn>
                <div class="mt-4 mb-4"></div>
                <v-btn class="primary--text" outlined tile width="100%">
                  <v-icon left>mdi-logout</v-icon>
                  Log Out
                </v-btn>
              </v-container>
            </v-col>
            <v-col>
              <div class="tersier rounded-lg pl-2 pr-2">
                <v-container>
                  <v-container>
                    <h2>Informasi Dasar</h2>
                  </v-container>
                  <v-row>
                    <v-col :cols="width >= 960 ? '7' : false">
                      <v-text-field
                        placeholder="Srikandi Nusantara"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col :cols="width >= 960 ? '7' : false">
                      <v-textarea
                        placeholder="Tentang saya... (opsional)"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                  <v-row class="d-flex flex-column flex-sm-row">
                    <v-col :cols="width >= 600 ? '7' : false">
                      <v-text-field
                        placeholder="srikandi.nusantara@gmail.com"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      :cols="width >= 600 ? '5' : false"
                      style="font-size: 10pt;"
                    >
                      Kami tidak akan mengungkapkan email anda kepada orang lain
                      atau menggunakannya untuk mengirimi anda spam.
                    </v-col>
                  </v-row>
                  <v-row class="d-flex flex-column flex-sm-row">
                    <v-col :cols="width >= 600 ? '7' : false">
                      <v-text-field
                        placeholder="081-23456-7890"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      :cols="width >= 600 ? '5' : false"
                      style="font-size: 10pt;"
                    >
                      Anda telah memverifikasi telepon anda. Hal tersebut
                      penting untuk memungkinkan kami berkomunikasi dengan anda
                      dengan aman.
                    </v-col>
                  </v-row>
                  <v-row class="d-flex flex-column flex-sm-row">
                    <v-col :cols="width >= 600 ? '7' : false">
                      <v-text-field
                        placeholder="3201-xxxx-xxxx-xxxx"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      :cols="width >= 600 ? '5' : false"
                      style="font-size: 10pt;"
                    >
                      Anda telah memverifikasi identitas anda. Hal tersebut
                      penting untuk menjamin setiap tindakan anda sebagai
                      penyedia sewa
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="mt-8 mb-8"></div>
              <div class="tersier rounded-lg pl-2 pr-2">
                <v-container>
                  <v-container>
                    <h2>Informasi Kontak Penyewaan</h2>
                  </v-container>
                  <v-row align="center" class="d-flex flex-column flex-sm-row">
                    <v-col :cols="width >= 600 ? '7' : false">
                      <v-text-field
                        placeholder="0812-3456-7890"
                        prepend-inner-icon="mdi-whatsapp"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      :cols="width >= 600 ? '5' : false"
                      p
                      style="font-size: 10pt;"
                    >
                      <v-btn
                        class="tersier--text"
                        color="primary"
                        depressed
                        tile
                        width="70%"
                      >
                        Disconnect
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row align="center" class="d-flex flex-column flex-sm-row">
                    <v-col :cols="width >= 600 ? '7' : false">
                      <v-text-field
                        placeholder="masuk dengan facebook"
                        prepend-inner-icon="mdi-facebook"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                    <v-col
                      :cols="width >= 600 ? '5' : false"
                      style="font-size: 10pt;"
                    >
                      <v-btn
                        class="tersier--text"
                        color="primary"
                        depressed
                        tile
                        width="70%"
                      >
                        Connect
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="mt-8 mb-8"></div>
              <div class="tersier rounded-lg pl-2 pr-2">
                <v-container>
                  <v-container>
                    <h2>Ubah Password</h2>
                  </v-container>
                  <v-row align="center">
                    <v-col :cols="width >= 960 ? '10' : false">
                      <v-text-field
                        placeholder="Password saat ini"
                        append-icon="mdi-eye"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col :cols="width >= 960 ? '10' : false">
                      <v-text-field
                        placeholder="Password baru"
                        messages="Gunakan minimal 6 karakter,
                      dan setidaknya satu huruf dan satu angka"
                        append-icon="mdi-eye"
                        rounded
                        solo
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col :cols="width >= 960 ? '10' : false">
                      <v-text-field
                        placeholder="Konfirmasi password baru"
                        append-icon="mdi-eye"
                        rounded
                        solo
                        hide-details
                        flat
                        outlined
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-container>
                    <v-btn class="tersier--text" color="primary" depressed tile>
                      Ubah Password
                    </v-btn>
                  </v-container>
                </v-container>
              </div>
              <div class="mt-8 mb-8"></div>
              <div class="tersier rounded-lg pl-2 pr-2">
                <v-container>
                  <v-container>
                    <h2>Notifikasi</h2>
                  </v-container>
                  <v-row align="center">
                    <v-col :cols="width >= 960 ? '10' : false">
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title
                            >Komunikasi dan Promosi</v-list-item-title
                          >
                          <v-list-item-subtitle
                            >Terima pembaruan, penawaran, survei, dan
                            lainnya</v-list-item-subtitle
                          >
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-switch inset></v-switch>
                        </v-list-item-action>
                      </v-list-item>
                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Rekomendasi</v-list-item-title>
                          <v-list-item-subtitle
                            >Terima rekomendasi berdasarkan aktivitas
                            anda</v-list-item-subtitle
                          >
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-switch inset></v-switch>
                        </v-list-item-action>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Footer from "@/components/footer";
import Header from "@/components/header";

export default {
  name: "Profile",
  components: {
    Footer,
    Header
  },

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>