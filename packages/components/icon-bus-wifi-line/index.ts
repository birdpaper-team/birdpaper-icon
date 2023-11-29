import type { App } from 'vue';
import _IconBusWifiLine from './icon-bus-wifi-line.vue';

const IconBusWifiLine = Object.assign(_IconBusWifiLine, {
  install: (app: App) => {
    app.component(_IconBusWifiLine.name, _IconBusWifiLine);
  }
});

export default IconBusWifiLine;