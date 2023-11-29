import type { App } from 'vue';
import _IconSort from './icon-sort.vue';

const IconSort = Object.assign(_IconSort, {
  install: (app: App) => {
    app.component(_IconSort.name, _IconSort);
  }
});

export default IconSort;