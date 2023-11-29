import type { App } from 'vue';
import _IconCylinder from './icon-cylinder.vue';

const IconCylinder = Object.assign(_IconCylinder, {
  install: (app: App) => {
    app.component(_IconCylinder.name, _IconCylinder);
  }
});

export default IconCylinder;