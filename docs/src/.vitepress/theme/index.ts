import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import Theme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

import BirdpaperIcon from "birdpaper-icon";

import "uno.css";
import "../../style/index.scss";

export default {
  ...Theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(BirdpaperIcon);
  },
};
