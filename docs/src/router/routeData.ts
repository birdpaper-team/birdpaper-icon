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
  /** 是否需要鉴权 */
  isAuth: boolean;
}

/** 应用路由 */
const appPages: RouteItem[] = [
  { title: "主页", name: "home-index", page: "home/index", path: "/", isAuth: false },
];

export { appPages };
