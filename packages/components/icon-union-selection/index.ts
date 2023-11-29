import type { App } from 'vue';
import _IconUnionSelection from './icon-union-selection.vue';

const IconUnionSelection = Object.assign(_IconUnionSelection, {
  install: (app: App) => {
    app.component(_IconUnionSelection.name, _IconUnionSelection);
  }
});

export default IconUnionSelection;