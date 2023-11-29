import type { App } from 'vue';
import _IconWifiOffFill from './icon-wifi-off-fill.vue';

const IconWifiOffFill = Object.assign(_IconWifiOffFill, {
  install: (app: App) => {
    app.component(_IconWifiOffFill.name, _IconWifiOffFill);
  }
});

export default IconWifiOffFill;