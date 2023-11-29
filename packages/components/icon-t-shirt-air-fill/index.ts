import type { App } from 'vue';
import _IconTShirtAirFill from './icon-t-shirt-air-fill.vue';

const IconTShirtAirFill = Object.assign(_IconTShirtAirFill, {
  install: (app: App) => {
    app.component(_IconTShirtAirFill.name, _IconTShirtAirFill);
  }
});

export default IconTShirtAirFill;