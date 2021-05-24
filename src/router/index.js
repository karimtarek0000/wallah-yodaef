import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";

//
Vue.use(VueRouter);

//
const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/donation",
        name: "Donation",
        component: () =>
          import(/* webpackChunkName: "donation" */ "../views/Donation.vue"),
      },
      {
        path: "/wallet",
        name: "Wallet",
        component: () =>
          import(/* webpackChunkName: "wallet" */ "../views/Wallet.vue"),
      },
      {
        path: "/my-account",
        name: "MyAccount",
        component: () =>
          import(/* webpackChunkName: "donation" */ "../views/MyAccount.vue"),
      },
      {
        path: "/more-info",
        name: "MoreInfo",
        component: () =>
          import(/* webpackChunkName: "moreInfo" */ "../views/MoreInfo.vue"),
      },
    ],
  },
];

//
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//
export default router;
