import Vue from 'vue';
import App from './app';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import {auth} from "@/firebase";


Vue.config.productionTip = false;

// let app
auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);//.then(() => {});
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

// new Vue({
//     render: h => h(App),
//     router,
//     vuetify,
//     el: '#app',
//     data: {
//         name: 'wwwws',
//     },
//     mounted() {
//         if (localStorage.name) {
//             this.name = localStorage.name;
//         }
//     },
//     watch: {
//         name(newName) {
//             localStorage.name = newName;
//         }
//     }
// });
