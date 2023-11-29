import type { App } from 'vue';
import _IconFootprintFill from './icon-footprint-fill.vue';

const IconFootprintFill = Object.assign(_IconFootprintFill, {
  install: (app: App) => {
    app.component(_IconFootprintFill.name, _IconFootprintFill);
  }
});

export default IconFootprintFill;