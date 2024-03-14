import type { App } from 'vue';
import _IconSortAlphabetAsc from './icon-sort-alphabet-asc.vue';

const IconSortAlphabetAsc = Object.assign(_IconSortAlphabetAsc, {
  install: (app: App) => {
    app.component(_IconSortAlphabetAsc.name, _IconSortAlphabetAsc);
  }
});

export default IconSortAlphabetAsc;