import { createWebHashHistory, createRouter } from "vue-router";

const pagesInfo = import.meta.glob("../views/**/page.js", {
  eager: true,
  import: "default",
});
const pageComps = import.meta.glob("../views/**/index.vue", {
  eager: true,
  import: "default",
})
console.log(pagesInfo);
const routes = Object.entries(pagesInfo).map(([path, meta]) =>{
  const pageJSPath = path
  path = path.replace('../views', '').replace('/page.js', '');
  path = path || '/'
  const name = path.split("/").filter(Boolean).join("-") || "index";
  const componentPath = pageJSPath.replace('page.js', 'index.vue')
  return {
    path,
    name,
    component: pageComps[componentPath],
    meta,
  }; 
})
console.log(routes);
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("../views/index.vue"),
//     meta: {
//       title: "Home",
//       menuOrder: 10,
//     },
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("../views/about/index.vue"),
//     meta: {
//       title: "About",
//       menuOrder: 2,
//     },
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: () => import("../views/contact/index.vue"),
//     meta: {
//       title: "Contact",
//       menuOrder: 3,
//     },
//   },
// ];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
