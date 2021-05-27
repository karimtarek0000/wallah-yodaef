import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/auth/Auth.vue";
import Register from "../views/auth/Register.vue";

//
Vue.use(VueRouter);

//
const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "Index" */ "../views/Index.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
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
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    redirect: { name: "Register" },
    children: [
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "sign-in",
        name: "SignIn",
        component: () =>
          import(/* webpackChunkName: "SignIn" */ "../views/auth/SignIn.vue"),
        meta: {
          title: "تسجيل الدخول",
          head: "تسجيل الدخول",
        },
      },
      {
        path: "sign-Up",
        name: "SignUp",
        component: () =>
          import(/* webpackChunkName: "SignUp" */ "../views/auth/SignUp.vue"),
        meta: {
          title: "تسجيل جديد",
          head: "انشاء حساب جديد",
        },
      },
      {
        path: "forget-password",
        name: "ForgetPassword",
        component: () =>
          import(
            /* webpackChunkName: "ForgetPassword" */ "../views/auth/ForgetPassword.vue"
          ),
        meta: {
          title: "نسيت كلمة السر",
          head: "هل نسيت كلمة السر ؟",
        },
      },
      {
        path: "password-recovery",
        name: "PasswordRecovery",
        component: () =>
          import(
            /* webpackChunkName: "PasswordRecovery" */ "../views/auth/PasswordRecovery.vue"
          ),
        meta: {
          title: "نسيت كلمة السر",
          head: "هل نسيت كلمة السر ؟",
        },
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
