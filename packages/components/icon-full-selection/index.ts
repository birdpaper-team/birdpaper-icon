import type { App } from 'vue';
import _IconFullSelection from './icon-full-selection.vue';

const IconFullSelection = Object.assign(_IconFullSelection, {
  install: (app: App) => {
    app.component(_IconFullSelection.name, _IconFullSelection);
  }
});

export default IconFullSelection;