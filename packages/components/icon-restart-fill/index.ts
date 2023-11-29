import type { App } from 'vue';
import _IconRestartFill from './icon-restart-fill.vue';

const IconRestartFill = Object.assign(_IconRestartFill, {
  install: (app: App) => {
    app.component(_IconRestartFill.name, _IconRestartFill);
  }
});

export default IconRestartFill;