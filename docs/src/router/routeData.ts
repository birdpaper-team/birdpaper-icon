interface RouteItem {
  /** 页面标题 */
  title: string;
  /** 标识 */
  name: string;
  /** 文件路径 */
  page?: string;
  /** 别名 */
  alias?: string;
  /** 页面路径 */
  path: string;
}

/** 应用路由 */
const appPages: RouteItem[] = [
  { title: "", name: "home-index", page: "home/index", path: "/" },
];

export { appPages };
