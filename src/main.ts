import '@fortawesome/fontawesome-free/css/all.min.css';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SuccessPage from './components/SuccessPage.vue';
import HomePage from './components/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/success', component: SuccessPage },
  // 之後會加入完成頁面
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
