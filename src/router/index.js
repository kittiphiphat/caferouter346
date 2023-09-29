import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/MainPage.vue'
import Newcard from '../components/Newcard.vue'

import ANewcard_01 from '../components/Anewcard_1.vue';
import ANewcard_02 from '../components/Anewcard_2.vue';
import ANewcard_03 from '../components/Anewcard_3.vue';
import ANewcard_04 from '../components/Anewcard_4.vue';
import ANewcard_05 from '../components/Anewcard_5.vue';
import ANewcard_06 from '../components/Anewcard_6.vue';


const shopRoutes = [
  { name: 'news_1', component: ANewcard_01, shop: 'ท่าช้าง คาเฟ่' },
  { name: 'news_2', component: ANewcard_02, shop: 'THE GOOD VIEW' },
  { name: 'news_3', component: ANewcard_03, shop: 'The Riverside'},
  { name: 'news_4', component: ANewcard_04, shop: 'WarmUp Cafe'},
  { name: 'news_5', component: ANewcard_05, shop: 'ตะวันแดง มหาชน'},
  { name: 'news_6', component: ANewcard_06, shop: 'ฮอม บาร์'}
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
