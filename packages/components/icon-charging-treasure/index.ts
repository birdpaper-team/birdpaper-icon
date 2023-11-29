import type { App } from 'vue';
import _IconChargingTreasure from './icon-charging-treasure.vue';

const IconChargingTreasure = Object.assign(_IconChargingTreasure, {
  install: (app: App) => {
    app.component(_IconChargingTreasure.name, _IconChargingTreasure);
  }
});

export default IconChargingTreasure;