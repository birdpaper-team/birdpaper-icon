import type { App } from 'vue';
import _IconIron from './icon-iron.vue';

const IconIron = Object.assign(_IconIron, {
  install: (app: App) => {
    app.component(_IconIron.name, _IconIron);
  }
});

export default IconIron;