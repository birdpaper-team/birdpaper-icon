import { head } from "./head";
import { locales } from "./locales/index";

const config: import("vitepress").UserConfig = {
  lastUpdated: false,
  cleanUrls: true,
  appearance: true,
  outDir: "../dist",
  locales,
  head,
  themeConfig: {
    logo: {
      dark: "https://cos.birdpaper.design/birdpaper-icon/v1/logo/logo-white.svg",
      light: "https://cos.birdpaper.design/birdpaper-icon/v1/logo/logo-black.svg",
    },
    siteTitle: false,
    outline: "deep",
    socialLinks: [
      { icon: "npm", link: "https://www.npmjs.com/package/birdpaper-icon" },
      {
        icon: "github",
        link: "https://github.com/birdpaper-team/birdpaper-icon",
      },
    ],
    search: {
      provider: "local",
    },
  },
  markdown: {
    theme: {
      light: "min-light",
      dark: "min-dark",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@vue/composition-api": "vue",
        "dayjs": "dayjs",
      },
    },
    ssr: {
      noExternal: ["birdpaper-ui"],
    },
  },
};

export default config;
