import { createApp } from "vue";
import { router } from "./router/index";
import App from "./App.vue";

import "./style/index.less";

import BirdpaperUI from "birdpaper-ui";
import "birdpaper-ui/theme/src/index.css";

import VueWechatTitle from "vue-wechat-title";

export function createMainApp() {
  const app = createApp(App);

  app.use(router);
  app.use(VueWechatTitle);
  app.use(BirdpaperUI);
  return { app, router };
}