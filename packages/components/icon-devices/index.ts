import type { App } from 'vue';
import _IconDevices from './icon-devices.vue';

const IconDevices = Object.assign(_IconDevices, {
  install: (app: App) => {
    app.component(_IconDevices.name, _IconDevices);
  }
});

export default IconDevices;