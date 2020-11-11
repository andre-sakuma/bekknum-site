import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";
import Donate from "../views/Donate.vue";
import Subscribe from "../views/Subscribe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate
  },
  {
    path: "/subscribe",
    name: "Subscribe",
    component: Subscribe
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
