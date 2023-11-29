import type { App } from 'vue';
import _IconChargingPile2Line from './icon-charging-pile-2-line.vue';

const IconChargingPile2Line = Object.assign(_IconChargingPile2Line, {
  install: (app: App) => {
    app.component(_IconChargingPile2Line.name, _IconChargingPile2Line);
  }
});

export default IconChargingPile2Line;