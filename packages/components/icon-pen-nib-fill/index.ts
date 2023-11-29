import type { App } from 'vue';
import _IconPenNibFill from './icon-pen-nib-fill.vue';

const IconPenNibFill = Object.assign(_IconPenNibFill, {
  install: (app: App) => {
    app.component(_IconPenNibFill.name, _IconPenNibFill);
  }
});

export default IconPenNibFill;