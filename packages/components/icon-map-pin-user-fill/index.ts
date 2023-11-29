import type { App } from 'vue';
import _IconMapPinUserFill from './icon-map-pin-user-fill.vue';

const IconMapPinUserFill = Object.assign(_IconMapPinUserFill, {
  install: (app: App) => {
    app.component(_IconMapPinUserFill.name, _IconMapPinUserFill);
  }
});

export default IconMapPinUserFill;