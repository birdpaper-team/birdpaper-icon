import type { App } from 'vue';
import _IconDeviceRecoverLine from './icon-device-recover-line.vue';

const IconDeviceRecoverLine = Object.assign(_IconDeviceRecoverLine, {
  install: (app: App) => {
    app.component(_IconDeviceRecoverLine.name, _IconDeviceRecoverLine);
  }
});

export default IconDeviceRecoverLine;