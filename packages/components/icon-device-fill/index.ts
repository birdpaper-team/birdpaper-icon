import type { App } from 'vue';
import _IconDeviceFill from './icon-device-fill.vue';

const IconDeviceFill = Object.assign(_IconDeviceFill, {
  install: (app: App) => {
    app.component(_IconDeviceFill.name, _IconDeviceFill);
  }
});

export default IconDeviceFill;