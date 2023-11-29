import type { App } from 'vue';
import _IconMapPinRangeFill from './icon-map-pin-range-fill.vue';

const IconMapPinRangeFill = Object.assign(_IconMapPinRangeFill, {
  install: (app: App) => {
    app.component(_IconMapPinRangeFill.name, _IconMapPinRangeFill);
  }
});

export default IconMapPinRangeFill;