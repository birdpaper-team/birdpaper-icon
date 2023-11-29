import type { App } from 'vue';
import _IconSensorFill from './icon-sensor-fill.vue';

const IconSensorFill = Object.assign(_IconSensorFill, {
  install: (app: App) => {
    app.component(_IconSensorFill.name, _IconSensorFill);
  }
});

export default IconSensorFill;