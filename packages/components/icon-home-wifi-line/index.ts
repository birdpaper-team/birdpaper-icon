import type { App } from 'vue';
import _IconHomeWifiLine from './icon-home-wifi-line.vue';

const IconHomeWifiLine = Object.assign(_IconHomeWifiLine, {
  install: (app: App) => {
    app.component(_IconHomeWifiLine.name, _IconHomeWifiLine);
  }
});

export default IconHomeWifiLine;