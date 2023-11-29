import type { App } from 'vue';
import _IconWaterFlashFill from './icon-water-flash-fill.vue';

const IconWaterFlashFill = Object.assign(_IconWaterFlashFill, {
  install: (app: App) => {
    app.component(_IconWaterFlashFill.name, _IconWaterFlashFill);
  }
});

export default IconWaterFlashFill;