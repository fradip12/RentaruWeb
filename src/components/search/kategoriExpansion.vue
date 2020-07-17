<template>
  <v-expansion-panel>
    <v-expansion-panel-header color="primary" class="white--text white"
      >Kategori
      <template v-slot:actions>
        <v-icon color="white">$expand</v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content color="quarter">
      <v-list style="background-color:#ff7543;" flat>
        <v-list-item-group
          v-model="kategori"
          multiple
          active-class=""
          color="quarter"
        >
          <v-list-item v-for="item in kategoriItem" :key="item">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  item
                }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox color="white" dark :input-value="active" />
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "KategoriExpansion",

  data: function() {
    return {
      kategori: [],
      kategoriItem: [
        "Outdoor",
        "Hunian",
        "Transportasi",
        "Elektronik",
        "Fashion",
        "Jasa",
        "Lainnya"
      ]
    };
  }
};
</script>
