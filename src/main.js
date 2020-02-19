// Import Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import Frameworks
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import vuetify from "./plugins/vuetify";
// Import CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueSwal from "vue-swal";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// Includes
Vue.use(vuetify);
Vue.use(BootstrapVue);
Vue.use(VueSwal);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
