import type { App } from 'vue';
import _IconCornerUpRightFill from './icon-corner-up-right-fill.vue';

const IconCornerUpRightFill = Object.assign(_IconCornerUpRightFill, {
  install: (app: App) => {
    app.component(_IconCornerUpRightFill.name, _IconCornerUpRightFill);
  }
});

export default IconCornerUpRightFill;