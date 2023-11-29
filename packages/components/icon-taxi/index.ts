import type { App } from 'vue';
import _IconTaxi from './icon-taxi.vue';

const IconTaxi = Object.assign(_IconTaxi, {
  install: (app: App) => {
    app.component(_IconTaxi.name, _IconTaxi);
  }
});

export default IconTaxi;