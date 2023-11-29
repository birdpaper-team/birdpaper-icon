import type { App } from 'vue';
import _IconCornerLeftDown from './icon-corner-left-down.vue';

const IconCornerLeftDown = Object.assign(_IconCornerLeftDown, {
  install: (app: App) => {
    app.component(_IconCornerLeftDown.name, _IconCornerLeftDown);
  }
});

export default IconCornerLeftDown;