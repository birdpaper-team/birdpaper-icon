import type { App } from 'vue';
import _IconBatteryLowLine from './icon-battery-low-line.vue';

const IconBatteryLowLine = Object.assign(_IconBatteryLowLine, {
  install: (app: App) => {
    app.component(_IconBatteryLowLine.name, _IconBatteryLowLine);
  }
});

export default IconBatteryLowLine;