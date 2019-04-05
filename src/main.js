import Vue from "vue";
import App from "./App.vue";
// import lodash from "lodash";
// import VueLodash from "vue-lodash";

// const options = { name: "lodash" }; // customize the way you want to call it
// Vue.use(VueLodash, lodash);
// Vue.use(VueLodash, options); // options is optional
Vue.config.productionTip = false;

new Vue({
   render: h => h(App)
}).$mount("#app");
