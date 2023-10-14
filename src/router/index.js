import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/auth",
      redirect: "/auth/login",
      component: () => import("../layouts/Auth.vue"),
      children: [
        {
          path: "/auth/login",
          name: "Login",
          component: () => import("../pages/Login.vue"),
          meta: {
            title: "Tizimga kirish",
          },
        },
      ],
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home.vue"),
      meta: {
        title: "Home",
        protected: false,
      },
    },
    {
      path: "/sign-in",
      name: "Signin",
      component: () => import("../pages/Signin.vue"),
      meta: {
        title: "Sign in",
        protected: false,
      },
    },
    {
      path: "/sign-up",
      name: "Signup",
      component: () => import("../pages/Signup.vue"),
      meta: {
        title: "Sign up",
        protected: false,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | Help to grow`;
  const authStore = useAuthStore();
  const isAuthenticated = authStore.user !== null;
  if (to.meta.protected && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
