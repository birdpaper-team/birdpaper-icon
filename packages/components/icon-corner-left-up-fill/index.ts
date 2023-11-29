import type { App } from 'vue';
import _IconCornerLeftUpFill from './icon-corner-left-up-fill.vue';

const IconCornerLeftUpFill = Object.assign(_IconCornerLeftUpFill, {
  install: (app: App) => {
    app.component(_IconCornerLeftUpFill.name, _IconCornerLeftUpFill);
  }
});

export default IconCornerLeftUpFill;