import type { App } from 'vue';
import _IconWaterNo from './icon-water-no.vue';

const IconWaterNo = Object.assign(_IconWaterNo, {
  install: (app: App) => {
    app.component(_IconWaterNo.name, _IconWaterNo);
  }
});

export default IconWaterNo;