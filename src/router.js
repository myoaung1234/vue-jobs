import { createRouter, createWebHashHistory } from "vue-router";
import Home from './pages/Home.vue';
import { isAuthorized } from './store/user'

const routes = [
  { name: "home", path: "/", component: Home },
  {
    name: "postjob",
    path: "/post-job",
    component: () => import("./pages/PostJob.vue"),
    beforeEnter: () => isAuthorized(),
  },
  {
    name: "editjob",
    path: "/edit-job/:id",
    component: () => import("./pages/EditJob.vue"),
    beforeEnter: () => isAuthorized(),
  },
  {
    name: "register",
    path: "/register",
    component: () => import("./pages/Register.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("./pages/Login.vue"),
  },
];


export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function routerPush(name, params) {
  return params !== undefined
    ? router.push({
        name,
        params,
      })
    : router.push({ name });
}
