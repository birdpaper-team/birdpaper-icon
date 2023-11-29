import type { App } from 'vue';
import _IconWifiOffLine from './icon-wifi-off-line.vue';

const IconWifiOffLine = Object.assign(_IconWifiOffLine, {
  install: (app: App) => {
    app.component(_IconWifiOffLine.name, _IconWifiOffLine);
  }
});

export default IconWifiOffLine;