import type { App } from 'vue';
import _IconBatteryShareFill from './icon-battery-share-fill.vue';

const IconBatteryShareFill = Object.assign(_IconBatteryShareFill, {
  install: (app: App) => {
    app.component(_IconBatteryShareFill.name, _IconBatteryShareFill);
  }
});

export default IconBatteryShareFill;