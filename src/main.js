
import Vue from "vue";
import ElementUI from "element-ui";
import '@/assets/css/reset.css'
import '@/assets/css/public.css'

import "element-ui/lib/theme-chalk/index.css";

import router from "./router";
import store from "./store";
import App from "./App.vue";


Vue.config.productionTip = false;
Vue.use(ElementUI)
// import {
//     Menu,
//     Submenu,
//     MenuItem,
//     MenuItemGroup,
// } from 'element-ui';
//
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
//

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
