import type { App } from 'vue';
import _IconSwitch from './icon-switch.vue';

const IconSwitch = Object.assign(_IconSwitch, {
  install: (app: App) => {
    app.component(_IconSwitch.name, _IconSwitch);
  }
});

export default IconSwitch;