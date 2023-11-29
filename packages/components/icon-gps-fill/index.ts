import type { App } from 'vue';
import _IconGpsFill from './icon-gps-fill.vue';

const IconGpsFill = Object.assign(_IconGpsFill, {
  install: (app: App) => {
    app.component(_IconGpsFill.name, _IconGpsFill);
  }
});

export default IconGpsFill;