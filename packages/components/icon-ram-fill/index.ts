import type { App } from 'vue';
import _IconRamFill from './icon-ram-fill.vue';

const IconRamFill = Object.assign(_IconRamFill, {
  install: (app: App) => {
    app.component(_IconRamFill.name, _IconRamFill);
  }
});

export default IconRamFill;