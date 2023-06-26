import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import SignIn from "../views/SignIn.vue";
import Courses from "../views/Courses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/courses",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    component: Courses,
  },
  {
    path: "/courses/feeds",
    name: "courses-feeds",
    component: () => import("../views/CouesesFeeds.vue"),
  },
  {
    path: "/courses/mycourse",
    name: "my-course",
    component: () => import("../views/MyCourse.vue"),
  },
  {
    path: "/courses/followedlist",
    name: "FollowedList",
    component: () => import("../views/FollowedList.vue"),
  },
  // 路由由上往下匹配，動態路由需放在最下方
  {
    path: "/courses/:id",
    name: "course",
  },
  {
    path: "/admin/students",
    name: "admin-students",
    component: () => import("../views/AdminStudents.vue"),
  },
  {
    path: "/students/:id",
    name: "student",
  },
  {
    path: "/admin/courses",
    name: "admin-courses",
    component: () => import("../views/AdminCourses.vue"),
  },
  {
    path: "/admin/courses/new",
    name: "admin-course-new",
    component: () => import("../views/AdminCourseNew.vue"),
  },
  {
    path: "/admin/courses/:id/edit",
    name: "admin-course-edit",
    component: () => import("../views/AdminCourseEdit.vue"),
  },
  // 路由由上往下匹配，動態路由需放在最下方
  {
    path: "/admin/courses/:id",
    name: "admin-course",
    component: () => import("../views/AdminCourse.vue"),
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

export default router;
