import type { App } from 'vue';
import _IconSubtractSelectionOne from './icon-subtract-selection-one.vue';

const IconSubtractSelectionOne = Object.assign(_IconSubtractSelectionOne, {
  install: (app: App) => {
    app.component(_IconSubtractSelectionOne.name, _IconSubtractSelectionOne);
  }
});

export default IconSubtractSelectionOne;