import type { App } from 'vue';
import _IconChinaRailwayLine from './icon-china-railway-line.vue';

const IconChinaRailwayLine = Object.assign(_IconChinaRailwayLine, {
  install: (app: App) => {
    app.component(_IconChinaRailwayLine.name, _IconChinaRailwayLine);
  }
});

export default IconChinaRailwayLine;