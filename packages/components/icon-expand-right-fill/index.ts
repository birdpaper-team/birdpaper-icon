import type { App } from 'vue';
import _IconExpandRightFill from './icon-expand-right-fill.vue';

const IconExpandRightFill = Object.assign(_IconExpandRightFill, {
  install: (app: App) => {
    app.component(_IconExpandRightFill.name, _IconExpandRightFill);
  }
});

export default IconExpandRightFill;