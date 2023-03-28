// import {
//   SUPPORT_LOCALES,
//   setI18nLanguage,
//   loadLocaleMessages,
//   setupI18n,
// } from "../i18n";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Therapist from "../views/Therapist.vue";
import About from "../views/About.vue";
import Plans from "../views/Plans.vue";

// const i18n = setupI18n();

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

// navigation guards

// router.beforeEach(async (to, from, next) => {
//   const paramsLocale = to.params?.locale ?? "en";

//   // use locale if paramsLocale is not in SUPPORT_LOCALES
//   if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//     return next(`/${locale}`);
//   }

//   // load locale messages
//   if (!i18n.global.availableLocales.includes(paramsLocale)) {
//     await loadLocaleMessages(i18n, paramsLocale);
//   }

//   // set i18n language
//   setI18nLanguage(i18n, paramsLocale);

//   return next();
// });

export default router;
