import { createRouter, createWebHashHistory } from "vue-router";
import GdList from "./src/components/gdList.vue";
import Create from "./src/components/create.vue";
import Customer from "./src/components/customer.vue";
import GdChange from "./src/components/gdChange.vue";
import Login from "./src/components/login.vue";
import GdDetails from "./src/components/gdDetails.vue";
import Repair from "./src/components/repair.vue";
import OpportunityList from "./src/components/opportunityList.vue";
import OpDetalis from "./src/components/opDetalis.vue";
import Opcreate from "./src/components/opcreate.vue";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/gdList",
    component: GdList,
  },
  {
    path: "/customer",
    component: Customer,
  },
  {
    path: "/gdChange",
    component: GdChange,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/gdDetails",
    component: GdDetails,
    name: "GdDetails",
    props: true,
  },
  {
    path: "/repair",
    component: Repair,
  },
  {
    path: "/opportunityList",
    component: OpportunityList,
  },
  {
    path: "/opDetalis",
    component: OpDetalis,
  },
  {
    path: "/opcreate",
    component: Opcreate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // scroll to id `#app` + 200px, and scroll smoothly (when supported by the browser)
    return {
      el: "#app",
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("token") ? true : false; // 通过判断本地是否存在 token 判断用户是否登录
  if (to.path == "/login") {
    // 若当前访问的是登录页面，则直接放行
    next();
  } else {
    // 若当前访问的不是登录页面，则进行登录验证
    isLogin ? next() : next("/login");
    // 如果已登录或访问登录页面，则继续访问，否则跳转至登录页面
  }
});

export default router;
 