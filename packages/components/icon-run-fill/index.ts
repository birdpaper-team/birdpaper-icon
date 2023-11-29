import type { App } from 'vue';
import _IconRunFill from './icon-run-fill.vue';

const IconRunFill = Object.assign(_IconRunFill, {
  install: (app: App) => {
    app.component(_IconRunFill.name, _IconRunFill);
  }
});

export default IconRunFill;