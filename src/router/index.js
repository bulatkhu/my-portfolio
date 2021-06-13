import VueRouter from "vue-router";
import MainPage from "@/roles/pages/User/MainPage";
import AboutPage from "@/roles/pages/User/AboutPage";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});

export default router;
