import type { App } from 'vue';
import _IconZcoolFill from './icon-zcool-fill.vue';

const IconZcoolFill = Object.assign(_IconZcoolFill, {
  install: (app: App) => {
    app.component(_IconZcoolFill.name, _IconZcoolFill);
  }
});

export default IconZcoolFill;