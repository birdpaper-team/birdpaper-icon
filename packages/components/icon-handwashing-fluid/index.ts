import type { App } from 'vue';
import _IconHandwashingFluid from './icon-handwashing-fluid.vue';

const IconHandwashingFluid = Object.assign(_IconHandwashingFluid, {
  install: (app: App) => {
    app.component(_IconHandwashingFluid.name, _IconHandwashingFluid);
  }
});

export default IconHandwashingFluid;