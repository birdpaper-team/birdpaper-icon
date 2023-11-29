import type { App } from 'vue';
import _IconDeleteBinFill from './icon-delete-bin-fill.vue';

const IconDeleteBinFill = Object.assign(_IconDeleteBinFill, {
  install: (app: App) => {
    app.component(_IconDeleteBinFill.name, _IconDeleteBinFill);
  }
});

export default IconDeleteBinFill;