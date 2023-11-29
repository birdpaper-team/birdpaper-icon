import type { App } from 'vue';
import _IconSignalWifiOffLine from './icon-signal-wifi-off-line.vue';

const IconSignalWifiOffLine = Object.assign(_IconSignalWifiOffLine, {
  install: (app: App) => {
    app.component(_IconSignalWifiOffLine.name, _IconSignalWifiOffLine);
  }
});

export default IconSignalWifiOffLine;