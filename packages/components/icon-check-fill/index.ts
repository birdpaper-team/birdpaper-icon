import type { App } from 'vue';
import _IconCheckFill from './icon-check-fill.vue';

const IconCheckFill = Object.assign(_IconCheckFill, {
  install: (app: App) => {
    app.component(_IconCheckFill.name, _IconCheckFill);
  }
});

export default IconCheckFill;