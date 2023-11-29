import type { App } from 'vue';
import _IconCornerRightDownFill from './icon-corner-right-down-fill.vue';

const IconCornerRightDownFill = Object.assign(_IconCornerRightDownFill, {
  install: (app: App) => {
    app.component(_IconCornerRightDownFill.name, _IconCornerRightDownFill);
  }
});

export default IconCornerRightDownFill;