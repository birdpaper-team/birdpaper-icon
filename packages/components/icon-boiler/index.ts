import type { App } from 'vue';
import _IconBoiler from './icon-boiler.vue';

const IconBoiler = Object.assign(_IconBoiler, {
  install: (app: App) => {
    app.component(_IconBoiler.name, _IconBoiler);
  }
});

export default IconBoiler;