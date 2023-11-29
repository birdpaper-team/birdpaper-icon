import type { App } from 'vue';
import _IconChargingPileFill from './icon-charging-pile-fill.vue';

const IconChargingPileFill = Object.assign(_IconChargingPileFill, {
  install: (app: App) => {
    app.component(_IconChargingPileFill.name, _IconChargingPileFill);
  }
});

export default IconChargingPileFill;