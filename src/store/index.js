import Vue from "vue";
import Vuex from "vuex";
import campaigns from "./modules/Campaign.js";
import session from "./modules/sessionState.js";
import user from "./modules/User.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    campaigns,
    session,
    user
  }
});
