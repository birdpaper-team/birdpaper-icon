import type { App } from 'vue';
import _IconSortAlphabetDesc from './icon-sort-alphabet-desc.vue';

const IconSortAlphabetDesc = Object.assign(_IconSortAlphabetDesc, {
  install: (app: App) => {
    app.component(_IconSortAlphabetDesc.name, _IconSortAlphabetDesc);
  }
});

export default IconSortAlphabetDesc;