import type { App } from 'vue';
import _IconBatteryLowFill2 from './icon-battery-low-fill-2.vue';

const IconBatteryLowFill2 = Object.assign(_IconBatteryLowFill2, {
  install: (app: App) => {
    app.component(_IconBatteryLowFill2.name, _IconBatteryLowFill2);
  }
});

export default IconBatteryLowFill2;