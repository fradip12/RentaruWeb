import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee4000',
        secondary: '#ce3800',
        tersier: '#f5f5f5',
        accent: '#ffffff',
      },
    },
  },
});
