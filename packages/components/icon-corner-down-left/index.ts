import type { App } from 'vue';
import _IconCornerDownLeft from './icon-corner-down-left.vue';

const IconCornerDownLeft = Object.assign(_IconCornerDownLeft, {
  install: (app: App) => {
    app.component(_IconCornerDownLeft.name, _IconCornerDownLeft);
  }
});

export default IconCornerDownLeft;