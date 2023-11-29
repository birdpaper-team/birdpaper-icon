import type { App } from 'vue';
import _IconViewfinder from './icon-viewfinder.vue';

const IconViewfinder = Object.assign(_IconViewfinder, {
  install: (app: App) => {
    app.component(_IconViewfinder.name, _IconViewfinder);
  }
});

export default IconViewfinder;