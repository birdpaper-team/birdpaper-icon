import type { App } from 'vue';
import _IconSubwayWifiLine from './icon-subway-wifi-line.vue';

const IconSubwayWifiLine = Object.assign(_IconSubwayWifiLine, {
  install: (app: App) => {
    app.component(_IconSubwayWifiLine.name, _IconSubwayWifiLine);
  }
});

export default IconSubwayWifiLine;