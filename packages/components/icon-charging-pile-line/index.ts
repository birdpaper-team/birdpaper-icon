import type { App } from 'vue';
import _IconChargingPileLine from './icon-charging-pile-line.vue';

const IconChargingPileLine = Object.assign(_IconChargingPileLine, {
  install: (app: App) => {
    app.component(_IconChargingPileLine.name, _IconChargingPileLine);
  }
});

export default IconChargingPileLine;