import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: "/home",
    component: () => import("../views/home/home.vue")
  },
  {
    path: "/cart",
    component: () => import("../views/cart/cart.vue")
  },
  {
    path: "/category",
    component: () => import("../views/category/category.vue")
  },
  {
    path: "/profile",
    component: () => import("../views/profile/profile.vue")
  },
  {
    path: "/detail/:id",
    component: () => import("../views/detail/detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
