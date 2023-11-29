import type { App } from 'vue';
import _IconCompassesFill from './icon-compasses-fill.vue';

const IconCompassesFill = Object.assign(_IconCompassesFill, {
  install: (app: App) => {
    app.component(_IconCompassesFill.name, _IconCompassesFill);
  }
});

export default IconCompassesFill;