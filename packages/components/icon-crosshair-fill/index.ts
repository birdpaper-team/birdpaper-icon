import type { App } from 'vue';
import _IconCrosshairFill from './icon-crosshair-fill.vue';

const IconCrosshairFill = Object.assign(_IconCrosshairFill, {
  install: (app: App) => {
    app.component(_IconCrosshairFill.name, _IconCrosshairFill);
  }
});

export default IconCrosshairFill;