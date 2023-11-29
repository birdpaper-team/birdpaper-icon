import type { App } from 'vue';
import _IconDeviceRecoverFill from './icon-device-recover-fill.vue';

const IconDeviceRecoverFill = Object.assign(_IconDeviceRecoverFill, {
  install: (app: App) => {
    app.component(_IconDeviceRecoverFill.name, _IconDeviceRecoverFill);
  }
});

export default IconDeviceRecoverFill;