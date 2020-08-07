
<template>
  <v-btn
    dark
    class="pa-7 ma-2 rounded-lg"
    :width="width <= 600 ? '150px' : width <= 960 ? '200px' : '250px'"
    :height="width <= 600 ? '10px' : width <= 960 ? '19px' : '80px'"
  >
    <v-container>
      <v-row no-gutters>
        <v-icon :size="width <= 600 ? '20' : width <= 960 ? '30' : '40'">{{
          iconName
        }}</v-icon>

        <v-col class="justify-start ml-4 ml-md-4 ml-sm-2">
          <div class="text-left text-md-subtitle-2 text-caption">
            DOWNLOAD DI<br />
            <span class="text-left text-sm-body-1 pa-0" style="font-size: 1em;">{{
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