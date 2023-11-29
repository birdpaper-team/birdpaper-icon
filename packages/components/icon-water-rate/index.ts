import type { App } from 'vue';
import _IconWaterRate from './icon-water-rate.vue';

const IconWaterRate = Object.assign(_IconWaterRate, {
  install: (app: App) => {
    app.component(_IconWaterRate.name, _IconWaterRate);
  }
});

export default IconWaterRate;