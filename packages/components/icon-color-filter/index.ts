import type { App } from 'vue';
import _IconColorFilter from './icon-color-filter.vue';

const IconColorFilter = Object.assign(_IconColorFilter, {
  install: (app: App) => {
    app.component(_IconColorFilter.name, _IconColorFilter);
  }
});

export default IconColorFilter;