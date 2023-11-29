import type { App } from 'vue';
import _IconInspection from './icon-inspection.vue';

const IconInspection = Object.assign(_IconInspection, {
  install: (app: App) => {
    app.component(_IconInspection.name, _IconInspection);
  }
});

export default IconInspection;