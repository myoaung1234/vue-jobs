import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: () => import("./pages/Login.vue") },
  { path: "/post-job", component: () => import("./pages/PostJob.vue") },
  { path: "/register", component: () => import("./pages/Register.vue") },
  { path: "/login", component: () => import("./pages/Login.vue") }
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
