import type { App } from 'vue';
import _IconBatteryShareLine from './icon-battery-share-line.vue';

const IconBatteryShareLine = Object.assign(_IconBatteryShareLine, {
  install: (app: App) => {
    app.component(_IconBatteryShareLine.name, _IconBatteryShareLine);
  }
});

export default IconBatteryShareLine;