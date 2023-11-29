import type { App } from 'vue';
import _IconPower from './icon-power.vue';

const IconPower = Object.assign(_IconPower, {
  install: (app: App) => {
    app.component(_IconPower.name, _IconPower);
  }
});

export default IconPower;