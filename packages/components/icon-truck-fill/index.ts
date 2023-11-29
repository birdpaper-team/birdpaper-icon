import type { App } from 'vue';
import _IconTruckFill from './icon-truck-fill.vue';

const IconTruckFill = Object.assign(_IconTruckFill, {
  install: (app: App) => {
    app.component(_IconTruckFill.name, _IconTruckFill);
  }
});

export default IconTruckFill;