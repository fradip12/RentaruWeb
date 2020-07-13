import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee4000',
        secondary: '#ce3800',
        tersier: '#f5f5f5',
        quarter: '#ff7543',
        accent: '#ffffff',
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
