import type { App } from 'vue';
import _IconRadarFill from './icon-radar-fill.vue';

const IconRadarFill = Object.assign(_IconRadarFill, {
  install: (app: App) => {
    app.component(_IconRadarFill.name, _IconRadarFill);
  }
});

export default IconRadarFill;