import type { App } from 'vue';
import _IconSignalWifiErrorFill from './icon-signal-wifi-error-fill.vue';

const IconSignalWifiErrorFill = Object.assign(_IconSignalWifiErrorFill, {
  install: (app: App) => {
    app.component(_IconSignalWifiErrorFill.name, _IconSignalWifiErrorFill);
  }
});

export default IconSignalWifiErrorFill;