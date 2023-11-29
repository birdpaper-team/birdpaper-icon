import type { App } from 'vue';
import _IconInjection from './icon-injection.vue';

const IconInjection = Object.assign(_IconInjection, {
  install: (app: App) => {
    app.component(_IconInjection.name, _IconInjection);
  }
});

export default IconInjection;