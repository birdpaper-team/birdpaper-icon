import type { App } from 'vue';
import _IconEndTimeSort from './icon-end-time-sort.vue';

const IconEndTimeSort = Object.assign(_IconEndTimeSort, {
  install: (app: App) => {
    app.component(_IconEndTimeSort.name, _IconEndTimeSort);
  }
});

export default IconEndTimeSort;