import type { App } from 'vue';
import _IconMouseFill from './icon-mouse-fill.vue';

const IconMouseFill = Object.assign(_IconMouseFill, {
  install: (app: App) => {
    app.component(_IconMouseFill.name, _IconMouseFill);
  }
});

export default IconMouseFill;