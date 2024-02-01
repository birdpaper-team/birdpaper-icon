import type { App } from 'vue';
import _IconExpandHeightFill from './icon-expand-height-fill.vue';

const IconExpandHeightFill = Object.assign(_IconExpandHeightFill, {
  install: (app: App) => {
    app.component(_IconExpandHeightFill.name, _IconExpandHeightFill);
  }
});

export default IconExpandHeightFill;