import type { App } from 'vue';
import _IconSortFour from './icon-sort-four.vue';

const IconSortFour = Object.assign(_IconSortFour, {
  install: (app: App) => {
    app.component(_IconSortFour.name, _IconSortFour);
  }
});

export default IconSortFour;