import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About"
import Layout from "./views/layout"
import Sign from "./views/sign"

Vue.use(Router);

export default new Router({
  // mode: "history",  // 需要后端配合
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/layout",
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
              component: About
          }
      ]
    },
      {
          path: "/",
          name: "Sign",
          component:Sign
      },
      {
          path: "/:page",
          name: "Sign",
          component:Sign
      }
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
