import type { App } from 'vue';
import _IconMapFill from './icon-map-fill.vue';

const IconMapFill = Object.assign(_IconMapFill, {
  install: (app: App) => {
    app.component(_IconMapFill.name, _IconMapFill);
  }
});

export default IconMapFill;