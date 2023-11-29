import type { App } from 'vue';
import _IconWaterFlashLine from './icon-water-flash-line.vue';

const IconWaterFlashLine = Object.assign(_IconWaterFlashLine, {
  install: (app: App) => {
    app.component(_IconWaterFlashLine.name, _IconWaterFlashLine);
  }
});

export default IconWaterFlashLine;