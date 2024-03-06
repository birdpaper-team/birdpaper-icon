import type { App } from 'vue';
import _IconExpandDiagonalFill from './icon-expand-diagonal-fill.vue';

const IconExpandDiagonalFill = Object.assign(_IconExpandDiagonalFill, {
  install: (app: App) => {
    app.component(_IconExpandDiagonalFill.name, _IconExpandDiagonalFill);
  }
});

export default IconExpandDiagonalFill;