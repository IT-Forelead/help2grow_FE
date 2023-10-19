import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
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
      path: "/mentor-matching",
      name: "Mentor matching",
      component: () => import("../pages/MentorMatching.vue"),
      meta: {
        title: "Mentor matching",
        protected: false,
      },
    },
    {
      path: "/task-assignment",
      name: "TA",
      component: () => import("../pages/TaskAssignment.vue"),
      meta: {
        title: "Task assignment",
        protected: false,
      },
    },    
    {
      path: "/tasks",
      name: "TC",
      component: () => import("../pages/Tasks.vue"),
      meta: {
        title: "Categorization of tasks",
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
