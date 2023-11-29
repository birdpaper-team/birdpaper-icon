import type { App } from 'vue';
import _IconInstanceFill from './icon-instance-fill.vue';

const IconInstanceFill = Object.assign(_IconInstanceFill, {
  install: (app: App) => {
    app.component(_IconInstanceFill.name, _IconInstanceFill);
  }
});

export default IconInstanceFill;