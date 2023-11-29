import type { App } from 'vue';
import _IconQqFill from './icon-qq-fill.vue';

const IconQqFill = Object.assign(_IconQqFill, {
  install: (app: App) => {
    app.component(_IconQqFill.name, _IconQqFill);
  }
});

export default IconQqFill;