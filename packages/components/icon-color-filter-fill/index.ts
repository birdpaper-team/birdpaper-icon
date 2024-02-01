import type { App } from 'vue';
import _IconColorFilterFill from './icon-color-filter-fill.vue';

const IconColorFilterFill = Object.assign(_IconColorFilterFill, {
  install: (app: App) => {
    app.component(_IconColorFilterFill.name, _IconColorFilterFill);
  }
});

export default IconColorFilterFill;