import type { App } from 'vue';
import _IconBatteryEmpty from './icon-battery-empty.vue';

const IconBatteryEmpty = Object.assign(_IconBatteryEmpty, {
  install: (app: App) => {
    app.component(_IconBatteryEmpty.name, _IconBatteryEmpty);
  }
});

export default IconBatteryEmpty;