import type { App } from 'vue';
import _IconStartTimeSort from './icon-start-time-sort.vue';

const IconStartTimeSort = Object.assign(_IconStartTimeSort, {
  install: (app: App) => {
    app.component(_IconStartTimeSort.name, _IconStartTimeSort);
  }
});

export default IconStartTimeSort;