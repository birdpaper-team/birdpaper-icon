import type { App } from 'vue';
import _IconFilter from './icon-filter.vue';

const IconFilter = Object.assign(_IconFilter, {
  install: (app: App) => {
    app.component(_IconFilter.name, _IconFilter);
  }
});

export default IconFilter;