import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TvShowView from '../views/TvShowView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shows',
      component: HomeView,
    },
    {
      path: '/show/:id',
      name: 'show',
      component: TvShowView
    }
  ]
});

export default router;
