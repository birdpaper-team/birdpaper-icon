import type { App } from 'vue';
import _IconExpandWidthFill from './icon-expand-width-fill.vue';

const IconExpandWidthFill = Object.assign(_IconExpandWidthFill, {
  install: (app: App) => {
    app.component(_IconExpandWidthFill.name, _IconExpandWidthFill);
  }
});

export default IconExpandWidthFill;