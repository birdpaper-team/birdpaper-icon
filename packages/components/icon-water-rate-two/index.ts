import type { App } from 'vue';
import _IconWaterRateTwo from './icon-water-rate-two.vue';

const IconWaterRateTwo = Object.assign(_IconWaterRateTwo, {
  install: (app: App) => {
    app.component(_IconWaterRateTwo.name, _IconWaterRateTwo);
  }
});

export default IconWaterRateTwo;