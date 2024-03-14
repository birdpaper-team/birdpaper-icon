import type { App } from 'vue';
import _IconSortNumberAsc from './icon-sort-number-asc.vue';

const IconSortNumberAsc = Object.assign(_IconSortNumberAsc, {
  install: (app: App) => {
    app.component(_IconSortNumberAsc.name, _IconSortNumberAsc);
  }
});

export default IconSortNumberAsc;