<template>
  <v-app>
    <v-main>
      <Header />

      <v-container fluid>
        <div class="text-h6 text-center my-5">Hasil pencarian untuk "meja"</div>

        <v-card style="background-color:#ce3800;">
          <v-card-title class="headline white--text">Saring</v-card-title>
          <v-expansion-panels accordion>
            <v-expansion-panel>
              <v-expansion-panel-header
                color="primary"
                class="white--text white"
                >Kategori
                <template v-slot:actions>
                  <v-icon color="white">$expand</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content color="quarter">
                <v-list flat>
                  <v-list-item-group
                    v-model="settings"
                    multiple
                    active-class=""
                    color="quarter"
                  >
                    <v-list-item>
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title>Outdoor</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-checkbox :input-value="active" />
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-list-item>
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title>Outdoor</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-checkbox :input-value="active" />
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-container>

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "@/components/footer";
import Header from "@/components/header";

export default {
  name: "Search",
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      settings: []
    };
  },

  methods: {
    toggle: function() {
      this.outdoor != this.outdoor;
    }
  }
};
</script>