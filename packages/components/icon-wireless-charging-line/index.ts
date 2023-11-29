import type { App } from 'vue';
import _IconWirelessChargingLine from './icon-wireless-charging-line.vue';

const IconWirelessChargingLine = Object.assign(_IconWirelessChargingLine, {
  install: (app: App) => {
    app.component(_IconWirelessChargingLine.name, _IconWirelessChargingLine);
  }
});

export default IconWirelessChargingLine;