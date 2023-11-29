import type { App } from 'vue';
import _IconCrosshairLine from './icon-crosshair-line.vue';

const IconCrosshairLine = Object.assign(_IconCrosshairLine, {
  install: (app: App) => {
    app.component(_IconCrosshairLine.name, _IconCrosshairLine);
  }
});

export default IconCrosshairLine;