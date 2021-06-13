import VueRouter from "vue-router";
import MainPage from "@/roles/pages/User/MainPage";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
    },
  ],
});

export default router;
