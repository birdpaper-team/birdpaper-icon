import type { App } from 'vue';
import _IconSensorLine from './icon-sensor-line.vue';

const IconSensorLine = Object.assign(_IconSensorLine, {
  install: (app: App) => {
    app.component(_IconSensorLine.name, _IconSensorLine);
  }
});

export default IconSensorLine;