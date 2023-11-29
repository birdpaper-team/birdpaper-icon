import type { App } from 'vue';
import _IconBatteryStorage from './icon-battery-storage.vue';

const IconBatteryStorage = Object.assign(_IconBatteryStorage, {
  install: (app: App) => {
    app.component(_IconBatteryStorage.name, _IconBatteryStorage);
  }
});

export default IconBatteryStorage;