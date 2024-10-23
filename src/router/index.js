import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/productlist/productList.vue"),
    },
    {
      path: "/mens-clothing",
      name: "menscloth",
      component: () => import("../pages/menscloth/mensClothList.vue"),
    },
    {
      path: "/womens-clothing",
      name: "womenscloth",
      component: () => import("../pages/womenscloth/womensclothList.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "bad-not-found",
      component: () => import("../pages/404/404View.vue"),
    },
  ],
});

export default router;
