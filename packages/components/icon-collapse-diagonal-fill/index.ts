import type { App } from 'vue';
import _IconCollapseDiagonalFill from './icon-collapse-diagonal-fill.vue';

const IconCollapseDiagonalFill = Object.assign(_IconCollapseDiagonalFill, {
  install: (app: App) => {
    app.component(_IconCollapseDiagonalFill.name, _IconCollapseDiagonalFill);
  }
});

export default IconCollapseDiagonalFill;