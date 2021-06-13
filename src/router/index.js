import VueRouter from "vue-router";
import MainPage from "@/roles/pages/User/MainPage";
import AboutPage from "@/roles/pages/User/AboutPage";
import Contacts from "@/roles/pages/User/ContactsPage";

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
    {
      path: "/contacts",
      component: Contacts,
    },
  ],
});

export default router;
