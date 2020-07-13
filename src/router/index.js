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
    path: '/underconstruct',
    name: 'Under Construct',
    component: () => import('@/views/underconstruct'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
