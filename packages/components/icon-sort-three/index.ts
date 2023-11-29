import type { App } from 'vue';
import _IconSortThree from './icon-sort-three.vue';

const IconSortThree = Object.assign(_IconSortThree, {
  install: (app: App) => {
    app.component(_IconSortThree.name, _IconSortThree);
  }
});

export default IconSortThree;