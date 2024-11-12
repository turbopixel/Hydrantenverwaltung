import { createRouter, createWebHistory } from "vue-router";
import SignupView from "../views/public/SignupView.vue";
import LoginView from "@/views/public/LoginView.vue";
import ResetView from "@/views/secret/ResetView.vue";
import DashboardView from "@/views/secret/DashboardView.vue";
import Userfront from "@userfront/toolkit/vue";
import ProfileView from "@/views/secret/ProfileView.vue";
import LogoutView from "@/views/secret/LogoutView.vue";

const routes = [
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/public/AboutView.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "LogoutView",
    component: LogoutView,
  },
  {
    path: "/reset",
    name: "ResetView",
    component: ResetView,
  },
  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView,
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // If the user is not logged in, redirect to /login
  const isLoggedIn = !!Userfront.tokens.accessToken;
  if (to.name === "DashboardView" && !isLoggedIn) {
    return next({ path: "/login" });
  }
  if (to.name === "SignupView" && isLoggedIn) {
    return next({ path: "/dashboard" });
  }

  next();
});

export default router;
