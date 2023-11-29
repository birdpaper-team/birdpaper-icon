import type { App } from 'vue';
import _IconBatteryFailure from './icon-battery-failure.vue';

const IconBatteryFailure = Object.assign(_IconBatteryFailure, {
  install: (app: App) => {
    app.component(_IconBatteryFailure.name, _IconBatteryFailure);
  }
});

export default IconBatteryFailure;