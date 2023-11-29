import type { App } from 'vue';
import _IconCornerDownRightFill from './icon-corner-down-right-fill.vue';

const IconCornerDownRightFill = Object.assign(_IconCornerDownRightFill, {
  install: (app: App) => {
    app.component(_IconCornerDownRightFill.name, _IconCornerDownRightFill);
  }
});

export default IconCornerDownRightFill;