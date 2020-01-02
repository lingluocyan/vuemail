import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "components/common/toast";
import VueLazyload from 'vue-lazyload'
import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;
Vue.use(toast);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
