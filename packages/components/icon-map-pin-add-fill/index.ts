import type { App } from 'vue';
import _IconMapPinAddFill from './icon-map-pin-add-fill.vue';

const IconMapPinAddFill = Object.assign(_IconMapPinAddFill, {
  install: (app: App) => {
    app.component(_IconMapPinAddFill.name, _IconMapPinAddFill);
  }
});

export default IconMapPinAddFill;