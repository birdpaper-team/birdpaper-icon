import type { App } from 'vue';
import _IconPinDistanceFill from './icon-pin-distance-fill.vue';

const IconPinDistanceFill = Object.assign(_IconPinDistanceFill, {
  install: (app: App) => {
    app.component(_IconPinDistanceFill.name, _IconPinDistanceFill);
  }
});

export default IconPinDistanceFill;