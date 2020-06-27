import Vue from 'vue';
import App from './page/Profile.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app');
