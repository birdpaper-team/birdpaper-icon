import type { App } from 'vue';
import _IconSelected from './icon-selected.vue';

const IconSelected = Object.assign(_IconSelected, {
  install: (app: App) => {
    app.component(_IconSelected.name, _IconSelected);
  }
});

export default IconSelected;