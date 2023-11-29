import type { App } from 'vue';
import _IconMapPinFill from './icon-map-pin-fill.vue';

const IconMapPinFill = Object.assign(_IconMapPinFill, {
  install: (app: App) => {
    app.component(_IconMapPinFill.name, _IconMapPinFill);
  }
});

export default IconMapPinFill;