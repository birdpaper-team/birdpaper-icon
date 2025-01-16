import DefaultTheme from "vitepress/theme";
import Layout from "./layout.vue";
import Theme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";

import BirdpaperUI from "birdpaper-ui";
import "birdpaper-ui/theme/src/index.css";

import BirdpaperIcon from "birdpaper-icon/index.ts";
import "@birdpaper-icon/theme/index.scss";

import ApiBlock from "../components/api-block";

import "uno.css";
import "../../style/index.scss";

export default {
  ...Theme,
  Layout,
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(BirdpaperUI);
    ctx.app.use(BirdpaperIcon);
    
    ctx.app.component("api-block", ApiBlock);
  },
};
