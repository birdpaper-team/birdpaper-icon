import type { App } from 'vue';
import _IconSortOne from './icon-sort-one.vue';

const IconSortOne = Object.assign(_IconSortOne, {
  install: (app: App) => {
    app.component(_IconSortOne.name, _IconSortOne);
  }
});

export default IconSortOne;