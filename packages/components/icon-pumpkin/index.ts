import type { App } from 'vue';
import _IconPumpkin from './icon-pumpkin.vue';

const IconPumpkin = Object.assign(_IconPumpkin, {
  install: (app: App) => {
    app.component(_IconPumpkin.name, _IconPumpkin);
  }
});

export default IconPumpkin;