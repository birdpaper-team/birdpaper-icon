import type { App } from 'vue';
import _IconPlugFill from './icon-plug-fill.vue';

const IconPlugFill = Object.assign(_IconPlugFill, {
  install: (app: App) => {
    app.component(_IconPlugFill.name, _IconPlugFill);
  }
});

export default IconPlugFill;