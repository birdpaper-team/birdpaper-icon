import type { App } from 'vue';
import _IconWaterPercentFill from './icon-water-percent-fill.vue';

const IconWaterPercentFill = Object.assign(_IconWaterPercentFill, {
  install: (app: App) => {
    app.component(_IconWaterPercentFill.name, _IconWaterPercentFill);
  }
});

export default IconWaterPercentFill;