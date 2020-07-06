
<template>
  <v-btn
    dark
    class="pa-8 ma-5 ma-sm-0 mr-sm-5 mr-md-5 ma-md-5 rounded-lg"
    :width="width <= 600 ? '230px' : width <= 960 ? '171px' : '260px'"
    :height="width <= 600 ? '30px' : width <= 960 ? '19px' : '80px'"
  >
    <v-container>
      <v-row no-gutters>
        <v-icon :size="width <= 600 ? '30' : width <= 960 ? '40' : '50'">{{
          iconName
        }}</v-icon>
        <v-col class="justify-start ml-4 ml-md-4 ml-sm-2">
          <div class="text-left text-md-subtitle-2 text-caption">
            Dapatkan di<br />
            <span class="text-left text-md-h5 text-sm-body-1 text-h6 pa-0">{{
              marketText
            }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-btn>
</template>

<script>
export default {
  name: "unduhBtn",

  props: {
    iconName: String,
    marketText: String
  },

  computed: {
    width() {
      return screen.width;
    }
  }
};
</script>