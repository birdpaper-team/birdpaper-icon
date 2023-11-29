import type { App } from 'vue';
import _IconChangeDateSort from './icon-change-date-sort.vue';

const IconChangeDateSort = Object.assign(_IconChangeDateSort, {
  install: (app: App) => {
    app.component(_IconChangeDateSort.name, _IconChangeDateSort);
  }
});

export default IconChangeDateSort;