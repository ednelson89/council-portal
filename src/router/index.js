import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Campaigns from "../components/views/Campaigns.vue";
import Characters from "../components/views/Characters.vue";
import UserCharView from "../components/views/UserCharacters/CharacterViews/CharacterView.vue";
import UserCharEdit from "../components/views/UserCharacters/CharacterViews/CharacterEdit.vue";
import UserCharAdd from "../components/views/UserCharacters/CharacterViews/CharacterAdd.vue";
import Resources from "../components/views/Resources.vue";
import CreateGame from "../components/views/CampaignModules/AddCampaign.vue";
import GameHub from "../components/views/CampaignModules/GameHub.vue";
import GameJournals from "../components/views/CampaignModules/JournalView.vue";
import GameWikis from "../components/views/CampaignModules/WikiView.vue";
import GameChars from "../components/views/CampaignModules/GameChars.vue";
import GameCharView from "../components/views/CampaignModules/CharacterViews/CharacterView.vue";
import GameCharEdit from "../components/views/CampaignModules/CharacterViews/CharacterEdit.vue";
import GameCharAdd from "../components/views/CampaignModules/CharacterViews/CharacterAdd.vue";
import SignIn from "../components/common/SignIn.vue";
import CreateAccount from "../components/common/CreateAccount.vue";
import GameTable from "../components/views/CampaignModules/GameTable.vue";

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
    path: "/create-account",
    name: "Create Account",
    component: CreateAccount
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
    path: "/game-table",
    name: "Game Table",
    component: GameTable
  },
  {
    path: "/game-journal-view",
    name: "View Journals",
    component: GameJournals
  },
  {
    path: "/game-wiki-view",
    name: "View Wiki",
    component: GameWikis
  },
  {
    path: "/game-characters",
    name: "Campaign Characters",
    component: GameChars
  },
  {
    path: "/view-game-character",
    name: "Campaign Character Details",
    component: GameCharView
  },
  {
    path: "/edit-game-character",
    name: "Campaign Character Edit",
    component: GameCharEdit
  },
  {
    path: "/add-game-character",
    name: "Campaign Character Add",
    component: GameCharAdd
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters
  },
  {
    path: "/view-user-character",
    name: "User Character Details",
    component: UserCharView
  },
  {
    path: "/edit-user-character",
    name: "User Character Edit",
    component: UserCharEdit
  },
  {
    path: "/add-user-character",
    name: "User Character Add",
    component: UserCharAdd
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
