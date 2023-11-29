import type { App } from 'vue';
import _IconCosmeticBrush from './icon-cosmetic-brush.vue';

const IconCosmeticBrush = Object.assign(_IconCosmeticBrush, {
  install: (app: App) => {
    app.component(_IconCosmeticBrush.name, _IconCosmeticBrush);
  }
});

export default IconCosmeticBrush;