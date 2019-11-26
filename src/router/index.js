import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Campaigns from "../components/views/Campaigns.vue";
import Characters from "../components/views/Characters.vue";
import CreateGame from "../components/views/CampaignModules/AddCampaign.vue";
import GameHub from "../components/views/CampaignModules/GameHub.vue";

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
    path: "/new-campaigns",
    name: "Create Campaign",
    component: CreateGame
  },
  {
    path: "/game-hub",
    name: "View Game",
    component: GameHub
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
