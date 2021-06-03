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
        meta: {
          head: "الرئيسية",
        },
      },
      {
        path: "/donation",
        name: "Donation",
        component: () =>
          import(/* webpackChunkName: "donation" */ "../views/Donation.vue"),
        meta: {
          head: "سجل التبرعات",
        },
      },
      {
        path: "/wallet",
        name: "Wallet",
        component: () =>
          import(/* webpackChunkName: "wallet" */ "../views/Wallet.vue"),
        meta: {
          head: "المحفظة",
        },
      },
      {
        path: "/my-account",
        name: "MyAccount",
        component: () =>
          import(
            /* webpackChunkName: "account" */ "../views/MyAccount/MyAccount.vue"
          ),
        redirect: { name: "Account" },
        children: [
          {
            path: "account",
            name: "Account",
            component: () =>
              import(
                /* webpackChunkName: "account" */ "../views/MyAccount/Account.vue"
              ),
            meta: {
              head: "حسابي",
            },
          },
          {
            path: "change-account",
            name: "ChangeAccount",
            component: () =>
              import(
                /* webpackChunkName: "changeAccount" */ "../views/MyAccount/ChangeAccount.vue"
              ),
            meta: {
              head: "تعديل حسابي",
            },
          },
        ],
      },
      {
        path: "/more-info",
        name: "MoreInfo",
        component: () =>
          import(
            /* webpackChunkName: "moreInfo" */ "../views/MoreInfo/MoreInfo.vue"
          ),
        meta: {
          head: "المزيد",
        },
      },
      {
        path: "/about-site",
        name: "AboutSite",
        component: () =>
          import(
            /* webpackChunkName: "aboutSite" */ "../views/MoreInfo/AboutSite.vue"
          ),
        meta: {
          head: "عن الموقع",
        },
      },
      {
        path: "/terms",
        name: "Terms",
        component: () =>
          import(/* webpackChunkName: "terms" */ "../views/MoreInfo/Terms.vue"),
        meta: {
          head: "الشروط و الاحكام",
        },
      },
      {
        path: "/contact-us",
        name: "ContactUs",
        component: () =>
          import(
            /* webpackChunkName: "contactUs" */ "../views/MoreInfo/ContactUs.vue"
          ),
        meta: {
          head: "تواصل معنا",
        },
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
        path: "sign-up",
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
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
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
