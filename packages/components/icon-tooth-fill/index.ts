import type { App } from 'vue';
import _IconToothFill from './icon-tooth-fill.vue';

const IconToothFill = Object.assign(_IconToothFill, {
  install: (app: App) => {
    app.component(_IconToothFill.name, _IconToothFill);
  }
});

export default IconToothFill;