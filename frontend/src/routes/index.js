import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import MainPage from "@/views/MainPage.vue";
import AddPostPage from "@/views/AddPostPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      /* 메인페이지 */
      path: "/main",
      component: MainPage,
    },
    {
      /* 로그인페이지 */
      path: "/login",
      component: LoginPage,
    },
    {
      /* 회원가입페이지 */
      path: "/signup",
      component: SignupPage,
    },
    {
      path: "/add",
      component: AddPostPage,
    },
  ],
});

export default router;
