import Vue from 'vue';
import VueRouter from 'vue-router';
import {auth} from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/homepage'),
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile'),
    meta: {
      requiresAuth: true
    }
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
    meta: {
      requiresAuth: true
    }
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

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router