import type { App } from 'vue';
import _IconChargingPile2Fill from './icon-charging-pile-2-fill.vue';

const IconChargingPile2Fill = Object.assign(_IconChargingPile2Fill, {
  install: (app: App) => {
    app.component(_IconChargingPile2Fill.name, _IconChargingPile2Fill);
  }
});

export default IconChargingPile2Fill;