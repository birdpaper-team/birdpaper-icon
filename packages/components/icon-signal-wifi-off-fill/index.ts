import type { App } from 'vue';
import _IconSignalWifiOffFill from './icon-signal-wifi-off-fill.vue';

const IconSignalWifiOffFill = Object.assign(_IconSignalWifiOffFill, {
  install: (app: App) => {
    app.component(_IconSignalWifiOffFill.name, _IconSignalWifiOffFill);
  }
});

export default IconSignalWifiOffFill;