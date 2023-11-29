import type { App } from 'vue';
import _IconFigmaFlattenSelection from './icon-figma-flatten-selection.vue';

const IconFigmaFlattenSelection = Object.assign(_IconFigmaFlattenSelection, {
  install: (app: App) => {
    app.component(_IconFigmaFlattenSelection.name, _IconFigmaFlattenSelection);
  }
});

export default IconFigmaFlattenSelection;