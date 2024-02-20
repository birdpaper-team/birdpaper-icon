import { createRouter as _createRouter, createMemoryHistory } from "vue-router";
import { appPages } from "./routeData";
import Layout from "@/views/pages/layout/index";

// @ts-ignore
const modules = import.meta.glob("../views/**/*.vue");

let routes = [{ path: "/", component: Layout, children: [] }];

// 处理 App 应用程序路由
let appRoutes = [];
for (let i = 0; i < appPages.length; i++) {
  const { title, name, page, path } = appPages[i];

  appRoutes.push({
    name,
    path,
    component: modules[`../views/pages/${page}.vue`],
    meta: { title: `${title}` },
  });
}
routes[0].children = appRoutes;

export function createRouter() {
  return _createRouter({
    history: createMemoryHistory(),
    routes,
  });
}

const router = createRouter();
export { router };
