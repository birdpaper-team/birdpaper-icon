import type { App } from 'vue';
import _IconBattery2ChargeFill from './icon-battery-2-charge-fill.vue';

const IconBattery2ChargeFill = Object.assign(_IconBattery2ChargeFill, {
  install: (app: App) => {
    app.component(_IconBattery2ChargeFill.name, _IconBattery2ChargeFill);
  }
});

export default IconBattery2ChargeFill;