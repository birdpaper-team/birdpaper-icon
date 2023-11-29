import type { App } from 'vue';
import _IconSignalWifiErrorLine from './icon-signal-wifi-error-line.vue';

const IconSignalWifiErrorLine = Object.assign(_IconSignalWifiErrorLine, {
  install: (app: App) => {
    app.component(_IconSignalWifiErrorLine.name, _IconSignalWifiErrorLine);
  }
});

export default IconSignalWifiErrorLine;