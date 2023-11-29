import type { App } from 'vue';
import _IconBatteryLine from './icon-battery-line.vue';

const IconBatteryLine = Object.assign(_IconBatteryLine, {
  install: (app: App) => {
    app.component(_IconBatteryLine.name, _IconBatteryLine);
  }
});

export default IconBatteryLine;