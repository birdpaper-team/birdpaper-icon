import type { App } from 'vue';
import _IconManualGear from './icon-manual-gear.vue';

const IconManualGear = Object.assign(_IconManualGear, {
  install: (app: App) => {
    app.component(_IconManualGear.name, _IconManualGear);
  }
});

export default IconManualGear;