import type { App } from 'vue';
import _IconPowerpoint from './icon-powerpoint.vue';

const IconPowerpoint = Object.assign(_IconPowerpoint, {
  install: (app: App) => {
    app.component(_IconPowerpoint.name, _IconPowerpoint);
  }
});

export default IconPowerpoint;