import type { App } from 'vue';
import _IconCornerDownLeftFill from './icon-corner-down-left-fill.vue';

const IconCornerDownLeftFill = Object.assign(_IconCornerDownLeftFill, {
  install: (app: App) => {
    app.component(_IconCornerDownLeftFill.name, _IconCornerDownLeftFill);
  }
});

export default IconCornerDownLeftFill;