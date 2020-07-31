import Vue from 'vue';
import App from './app';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/css/main.css'


import titleMixin from "@/mixin/titleMixin";
Vue.mixin(titleMixin)

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app');
