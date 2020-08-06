import Vue from 'vue';
import App from './app';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import {auth} from "@/firebase";


Vue.config.productionTip = false;


import titleMixin from "@/mixin/titleMixin";

Vue.mixin(titleMixin)

let app
auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            router,
            store,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    }

    if (user) {
        store.dispatch('fetchUserProfile', user)
    }
})

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
