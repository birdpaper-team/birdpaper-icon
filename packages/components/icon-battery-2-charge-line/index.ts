import type { App } from 'vue';
import _IconBattery2ChargeLine from './icon-battery-2-charge-line.vue';

const IconBattery2ChargeLine = Object.assign(_IconBattery2ChargeLine, {
  install: (app: App) => {
    app.component(_IconBattery2ChargeLine.name, _IconBattery2ChargeLine);
  }
});

export default IconBattery2ChargeLine;