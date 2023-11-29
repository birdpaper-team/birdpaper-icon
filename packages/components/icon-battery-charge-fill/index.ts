import type { App } from 'vue';
import _IconBatteryChargeFill from './icon-battery-charge-fill.vue';

const IconBatteryChargeFill = Object.assign(_IconBatteryChargeFill, {
  install: (app: App) => {
    app.component(_IconBatteryChargeFill.name, _IconBatteryChargeFill);
  }
});

export default IconBatteryChargeFill;