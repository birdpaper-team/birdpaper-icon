import type { App } from 'vue';
import _IconCheckboxMultipleBlankFill from './icon-checkbox-multiple-blank-fill.vue';

const IconCheckboxMultipleBlankFill = Object.assign(_IconCheckboxMultipleBlankFill, {
  install: (app: App) => {
    app.component(_IconCheckboxMultipleBlankFill.name, _IconCheckboxMultipleBlankFill);
  }
});

export default IconCheckboxMultipleBlankFill;