import type { App } from 'vue';
import _IconSpeedFill from './icon-speed-fill.vue';

const IconSpeedFill = Object.assign(_IconSpeedFill, {
  install: (app: App) => {
    app.component(_IconSpeedFill.name, _IconSpeedFill);
  }
});

export default IconSpeedFill;