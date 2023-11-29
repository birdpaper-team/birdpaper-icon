import type { App } from 'vue';
import _IconWaterPercentLine from './icon-water-percent-line.vue';

const IconWaterPercentLine = Object.assign(_IconWaterPercentLine, {
  install: (app: App) => {
    app.component(_IconWaterPercentLine.name, _IconWaterPercentLine);
  }
});

export default IconWaterPercentLine;