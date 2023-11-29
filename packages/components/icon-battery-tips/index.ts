import type { App } from 'vue';
import _IconBatteryTips from './icon-battery-tips.vue';

const IconBatteryTips = Object.assign(_IconBatteryTips, {
  install: (app: App) => {
    app.component(_IconBatteryTips.name, _IconBatteryTips);
  }
});

export default IconBatteryTips;