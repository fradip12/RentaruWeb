import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/homepage'),
  },

  {
    path: '/l',
    name: 'Home',
    component: () => import('@/views/homepage2'),
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile'),
  },

  {
    path: '/error404',
    name: 'Error 404',
    component: () => import('@/views/unknown404'),
  },

  {
    path: '/under_construction',
    name: 'Under Construction',
    component: () => import('@/views/under_construction'),
  },

  {
    path: '/lihatads',
    name: 'Lihat Ads',
    component: () => import('@/views/lihatads'),
  },

  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('@/views/wishlist'),
  },

  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search'),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register"),
  },

  {
    path: "/blank",
    name: "Blank",
    component: () => import("@/views/blank"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
