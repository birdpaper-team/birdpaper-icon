import type { App } from 'vue';
import _IconTruck from './icon-truck.vue';

const IconTruck = Object.assign(_IconTruck, {
  install: (app: App) => {
    app.component(_IconTruck.name, _IconTruck);
  }
});

export default IconTruck;