import type { App } from 'vue';
import _IconBatteryLowFill from './icon-battery-low-fill.vue';

const IconBatteryLowFill = Object.assign(_IconBatteryLowFill, {
  install: (app: App) => {
    app.component(_IconBatteryLowFill.name, _IconBatteryLowFill);
  }
});

export default IconBatteryLowFill;