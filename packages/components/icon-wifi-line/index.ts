import type { App } from 'vue';
import _IconWifiLine from './icon-wifi-line.vue';

const IconWifiLine = Object.assign(_IconWifiLine, {
  install: (app: App) => {
    app.component(_IconWifiLine.name, _IconWifiLine);
  }
});

export default IconWifiLine;