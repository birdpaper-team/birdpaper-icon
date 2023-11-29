import type { App } from 'vue';
import _IconGridFill from './icon-grid-fill.vue';

const IconGridFill = Object.assign(_IconGridFill, {
  install: (app: App) => {
    app.component(_IconGridFill.name, _IconGridFill);
  }
});

export default IconGridFill;