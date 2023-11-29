import type { App } from 'vue';
import _IconIntersectSelection from './icon-intersect-selection.vue';

const IconIntersectSelection = Object.assign(_IconIntersectSelection, {
  install: (app: App) => {
    app.component(_IconIntersectSelection.name, _IconIntersectSelection);
  }
});

export default IconIntersectSelection;