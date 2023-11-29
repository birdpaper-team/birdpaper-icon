import type { App } from 'vue';
import _IconHomeGearFill from './icon-home-gear-fill.vue';

const IconHomeGearFill = Object.assign(_IconHomeGearFill, {
  install: (app: App) => {
    app.component(_IconHomeGearFill.name, _IconHomeGearFill);
  }
});

export default IconHomeGearFill;