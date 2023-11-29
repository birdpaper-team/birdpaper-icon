import type { App } from 'vue';
import _IconExpandLeftRightFill from './icon-expand-left-right-fill.vue';

const IconExpandLeftRightFill = Object.assign(_IconExpandLeftRightFill, {
  install: (app: App) => {
    app.component(_IconExpandLeftRightFill.name, _IconExpandLeftRightFill);
  }
});

export default IconExpandLeftRightFill;