import type { App } from 'vue';
import _IconFilterOffFill from './icon-filter-off-fill.vue';

const IconFilterOffFill = Object.assign(_IconFilterOffFill, {
  install: (app: App) => {
    app.component(_IconFilterOffFill.name, _IconFilterOffFill);
  }
});

export default IconFilterOffFill;