import type { App } from 'vue';
import _IconExcludeSelection from './icon-exclude-selection.vue';

const IconExcludeSelection = Object.assign(_IconExcludeSelection, {
  install: (app: App) => {
    app.component(_IconExcludeSelection.name, _IconExcludeSelection);
  }
});

export default IconExcludeSelection;