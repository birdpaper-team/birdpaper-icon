import type { App } from 'vue';
import _IconRemixRunFill from './icon-remix-run-fill.vue';

const IconRemixRunFill = Object.assign(_IconRemixRunFill, {
  install: (app: App) => {
    app.component(_IconRemixRunFill.name, _IconRemixRunFill);
  }
});

export default IconRemixRunFill;