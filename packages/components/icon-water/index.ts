import type { App } from 'vue';
import _IconWater from './icon-water.vue';

const IconWater = Object.assign(_IconWater, {
  install: (app: App) => {
    app.component(_IconWater.name, _IconWater);
  }
});

export default IconWater;