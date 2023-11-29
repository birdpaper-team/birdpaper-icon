import type { App } from 'vue';
import _IconWirelessChargingFill from './icon-wireless-charging-fill.vue';

const IconWirelessChargingFill = Object.assign(_IconWirelessChargingFill, {
  install: (app: App) => {
    app.component(_IconWirelessChargingFill.name, _IconWirelessChargingFill);
  }
});

export default IconWirelessChargingFill;