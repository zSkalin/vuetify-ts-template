import { AuthStore } from '@/store/modules/auth.store';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      redirectIfAuthed: true,
    },
  },
  { path: '*', redirect: { name: 'home' } },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (AuthStore.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else if (to.matched.some(record => record.meta.redirectIfAuthed)) {
    if (AuthStore.isAuthenticated) {
      next('/');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
