import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Campaigns from "../components/views/Campaigns.vue";
import Characters from "../components/views/Characters.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/campaigns",
    name: "Campaigns",
    component: Campaigns
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
