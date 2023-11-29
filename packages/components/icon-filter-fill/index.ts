import type { App } from 'vue';
import _IconFilterFill from './icon-filter-fill.vue';

const IconFilterFill = Object.assign(_IconFilterFill, {
  install: (app: App) => {
    app.component(_IconFilterFill.name, _IconFilterFill);
  }
});

export default IconFilterFill;