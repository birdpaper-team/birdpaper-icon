import type { App } from 'vue';
import _IconChinaRailwayFill from './icon-china-railway-fill.vue';

const IconChinaRailwayFill = Object.assign(_IconChinaRailwayFill, {
  install: (app: App) => {
    app.component(_IconChinaRailwayFill.name, _IconChinaRailwayFill);
  }
});

export default IconChinaRailwayFill;