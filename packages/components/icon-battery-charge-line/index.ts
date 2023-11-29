import type { App } from 'vue';
import _IconBatteryChargeLine from './icon-battery-charge-line.vue';

const IconBatteryChargeLine = Object.assign(_IconBatteryChargeLine, {
  install: (app: App) => {
    app.component(_IconBatteryChargeLine.name, _IconBatteryChargeLine);
  }
});

export default IconBatteryChargeLine;