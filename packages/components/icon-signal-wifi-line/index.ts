import type { App } from 'vue';
import _IconSignalWifiLine from './icon-signal-wifi-line.vue';

const IconSignalWifiLine = Object.assign(_IconSignalWifiLine, {
  install: (app: App) => {
    app.component(_IconSignalWifiLine.name, _IconSignalWifiLine);
  }
});

export default IconSignalWifiLine;