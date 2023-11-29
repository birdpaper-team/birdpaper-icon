import type { App } from 'vue';
import _IconCrosshair2Line from './icon-crosshair-2-line.vue';

const IconCrosshair2Line = Object.assign(_IconCrosshair2Line, {
  install: (app: App) => {
    app.component(_IconCrosshair2Line.name, _IconCrosshair2Line);
  }
});

export default IconCrosshair2Line;