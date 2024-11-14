import { createRouter, createWebHistory } from "vue-router";
import SignupView from "../views/public/SignupView.vue";
import LoginView from "@/views/public/LoginView.vue";
import ResetView from "@/views/secret/ResetView.vue";
import DashboardView from "@/views/secret/DashboardView.vue";
import Userfront from "@userfront/toolkit/vue";
import ProfileView from "@/views/secret/ProfileView.vue";
import LogoutView from "@/views/secret/LogoutView.vue";
import AboutView from "../views/public/AboutView.vue";
import HydrantCreateView from "@/views/secret/HydrantCreateView.vue";

const isLoggedIn = !!Userfront.tokens.accessToken;

const routes = [
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/",
    name: "about",
    component: isLoggedIn ? DashboardView : AboutView,
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
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/hydrant-add",
    name: "HydrantCreate",
    component: HydrantCreateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // If the user is not logged in, redirect to /login
  if (to.name === "DashboardView" && !isLoggedIn) {
    return next({ path: "/login" });
  }
  if (to.name === "SignupView" && isLoggedIn) {
    return next({ path: "/" });
  }

  next();
});

export default router;
