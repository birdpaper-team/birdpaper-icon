import type { App } from 'vue';
import _IconSortNumberDesc from './icon-sort-number-desc.vue';

const IconSortNumberDesc = Object.assign(_IconSortNumberDesc, {
  install: (app: App) => {
    app.component(_IconSortNumberDesc.name, _IconSortNumberDesc);
  }
});

export default IconSortNumberDesc;