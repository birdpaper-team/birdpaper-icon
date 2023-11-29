import type { App } from 'vue';
import _IconPowerSupply from './icon-power-supply.vue';

const IconPowerSupply = Object.assign(_IconPowerSupply, {
  install: (app: App) => {
    app.component(_IconPowerSupply.name, _IconPowerSupply);
  }
});

export default IconPowerSupply;