import type { App } from 'vue';
import _IconAlphabeticalSortingTwo from './icon-alphabetical-sorting-two.vue';

const IconAlphabeticalSortingTwo = Object.assign(_IconAlphabeticalSortingTwo, {
  install: (app: App) => {
    app.component(_IconAlphabeticalSortingTwo.name, _IconAlphabeticalSortingTwo);
  }
});

export default IconAlphabeticalSortingTwo;