import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Aboue from "./views/About"
import Layout from "./views/layout"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children:[
          {
              path:'home',
              component:Home
          },
          {
              path:'about',
              name:'about',
              component: Aboue
          }
      ]
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
