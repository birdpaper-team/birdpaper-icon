import type { App } from 'vue';
import _IconSubtractSelection from './icon-subtract-selection.vue';

const IconSubtractSelection = Object.assign(_IconSubtractSelection, {
  install: (app: App) => {
    app.component(_IconSubtractSelection.name, _IconSubtractSelection);
  }
});

export default IconSubtractSelection;