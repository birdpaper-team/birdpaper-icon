import type { App } from 'vue';
import _IconCornerLeftDownFill from './icon-corner-left-down-fill.vue';

const IconCornerLeftDownFill = Object.assign(_IconCornerLeftDownFill, {
  install: (app: App) => {
    app.component(_IconCornerLeftDownFill.name, _IconCornerLeftDownFill);
  }
});

export default IconCornerLeftDownFill;