import type { App } from 'vue';
import _IconDeadlineSort from './icon-deadline-sort.vue';

const IconDeadlineSort = Object.assign(_IconDeadlineSort, {
  install: (app: App) => {
    app.component(_IconDeadlineSort.name, _IconDeadlineSort);
  }
});

export default IconDeadlineSort;