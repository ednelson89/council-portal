import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Campaigns from "../components/views/Campaigns.vue";
import Characters from "../components/views/Characters.vue";
import Resources from "../components/views/Resources.vue";
import CreateGame from "../components/views/CampaignModules/AddCampaign.vue";
import GameHub from "../components/views/CampaignModules/GameHub.vue";
import Journals from "../components/views/CampaignModules/JournalView.vue";
import Wikis from "../components/views/CampaignModules/WikiView.vue";
import GameChars from "../components/views/CampaignModules/GameChars.vue";
import CharView from "../components/views/CampaignModules/CharacterViews/CharacterView.vue";
import CharEdit from "../components/views/CampaignModules/CharacterViews/CharacterEdit.vue";
import CharAdd from "../components/views/CampaignModules/CharacterViews/CharacterAdd.vue";
import SignIn from "../components/common/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn
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
    path: "/journal-view",
    name: "View Journals",
    component: Journals
  },
  {
    path: "/wiki-view",
    name: "View Wiki",
    component: Wikis
  },
  {
    path: "/game-characters",
    name: "Campaign Characters",
    component: GameChars
  },
  {
    path: "/view-character",
    name: "Character Details",
    component: CharView
  },
  {
    path: "/edit-character",
    name: "Character Edit",
    component: CharEdit
  },
  {
    path: "/add-character",
    name: "Character Add",
    component: CharAdd
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
