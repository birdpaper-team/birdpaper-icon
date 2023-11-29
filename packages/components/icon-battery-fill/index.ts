import type { App } from 'vue';
import _IconBatteryFill from './icon-battery-fill.vue';

const IconBatteryFill = Object.assign(_IconBatteryFill, {
  install: (app: App) => {
    app.component(_IconBatteryFill.name, _IconBatteryFill);
  }
});

export default IconBatteryFill;