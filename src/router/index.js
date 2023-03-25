import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Therapist from "../views/Therapist.vue";
import About from "../views/About.vue";
import Plans from "../views/Plans.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/therapist",
    name: "therapist",
    component: Therapist,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/plans",
    name: "plans",
    component: Plans,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
