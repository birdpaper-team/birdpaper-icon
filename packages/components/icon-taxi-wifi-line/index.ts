import type { App } from 'vue';
import _IconTaxiWifiLine from './icon-taxi-wifi-line.vue';

const IconTaxiWifiLine = Object.assign(_IconTaxiWifiLine, {
  install: (app: App) => {
    app.component(_IconTaxiWifiLine.name, _IconTaxiWifiLine);
  }
});

export default IconTaxiWifiLine;