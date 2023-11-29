import type { App } from 'vue';
import _IconDeviceLine from './icon-device-line.vue';

const IconDeviceLine = Object.assign(_IconDeviceLine, {
  install: (app: App) => {
    app.component(_IconDeviceLine.name, _IconDeviceLine);
  }
});

export default IconDeviceLine;