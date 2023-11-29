import type { App } from 'vue';
import _IconSortAmountDown from './icon-sort-amount-down.vue';

const IconSortAmountDown = Object.assign(_IconSortAmountDown, {
  install: (app: App) => {
    app.component(_IconSortAmountDown.name, _IconSortAmountDown);
  }
});

export default IconSortAmountDown;