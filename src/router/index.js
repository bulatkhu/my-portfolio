import VueRouter from "vue-router";
const MainPage = () => import("@/roles/pages/User/MainPage");
const AboutPage = () => import("@/roles/pages/User/AboutPage");
const Contacts = () => import("@/roles/pages/User/ContactsPage");
const Portfolio = () => import("@/roles/pages/User/Portfolio");
const ProjectItem = () => import("@/roles/pages/User/ProjectItem");

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
    {
      path: "/portfolio",
      component: Portfolio,
    },
    {
      path: "/project/:id",
      component: ProjectItem,
    },
  ],
});

export default router;
