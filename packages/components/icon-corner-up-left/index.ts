import type { App } from 'vue';
import _IconCornerUpLeft from './icon-corner-up-left.vue';

const IconCornerUpLeft = Object.assign(_IconCornerUpLeft, {
  install: (app: App) => {
    app.component(_IconCornerUpLeft.name, _IconCornerUpLeft);
  }
});

export default IconCornerUpLeft;