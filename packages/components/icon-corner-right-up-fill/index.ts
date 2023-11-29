import type { App } from 'vue';
import _IconCornerRightUpFill from './icon-corner-right-up-fill.vue';

const IconCornerRightUpFill = Object.assign(_IconCornerRightUpFill, {
  install: (app: App) => {
    app.component(_IconCornerRightUpFill.name, _IconCornerRightUpFill);
  }
});

export default IconCornerRightUpFill;