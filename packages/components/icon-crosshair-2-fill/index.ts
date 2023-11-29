import type { App } from 'vue';
import _IconCrosshair2Fill from './icon-crosshair-2-fill.vue';

const IconCrosshair2Fill = Object.assign(_IconCrosshair2Fill, {
  install: (app: App) => {
    app.component(_IconCrosshair2Fill.name, _IconCrosshair2Fill);
  }
});

export default IconCrosshair2Fill;