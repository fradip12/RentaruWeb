import Vue from 'vue';
//import Profile from './page/Profile.vue';
import App from './page/Homepage.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app');
