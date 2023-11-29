import type { App } from 'vue';
import _IconMapPinTimeFill from './icon-map-pin-time-fill.vue';

const IconMapPinTimeFill = Object.assign(_IconMapPinTimeFill, {
  install: (app: App) => {
    app.component(_IconMapPinTimeFill.name, _IconMapPinTimeFill);
  }
});

export default IconMapPinTimeFill;