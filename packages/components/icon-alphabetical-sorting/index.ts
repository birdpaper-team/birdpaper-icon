import type { App } from 'vue';
import _IconAlphabeticalSorting from './icon-alphabetical-sorting.vue';

const IconAlphabeticalSorting = Object.assign(_IconAlphabeticalSorting, {
  install: (app: App) => {
    app.component(_IconAlphabeticalSorting.name, _IconAlphabeticalSorting);
  }
});

export default IconAlphabeticalSorting;