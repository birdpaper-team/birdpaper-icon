import type { App } from 'vue';
import _IconCornerRightDown from './icon-corner-right-down.vue';

const IconCornerRightDown = Object.assign(_IconCornerRightDown, {
  install: (app: App) => {
    app.component(_IconCornerRightDown.name, _IconCornerRightDown);
  }
});

export default IconCornerRightDown;