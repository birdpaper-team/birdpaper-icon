import type { App } from 'vue';
import _IconHandbagFill from './icon-handbag-fill.vue';

const IconHandbagFill = Object.assign(_IconHandbagFill, {
  install: (app: App) => {
    app.component(_IconHandbagFill.name, _IconHandbagFill);
  }
});

export default IconHandbagFill;