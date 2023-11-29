import type { App } from 'vue';
import _IconSpeedUpFill from './icon-speed-up-fill.vue';

const IconSpeedUpFill = Object.assign(_IconSpeedUpFill, {
  install: (app: App) => {
    app.component(_IconSpeedUpFill.name, _IconSpeedUpFill);
  }
});

export default IconSpeedUpFill;