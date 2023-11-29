import type { App } from 'vue';
import _IconCheckboxBlankFill from './icon-checkbox-blank-fill.vue';

const IconCheckboxBlankFill = Object.assign(_IconCheckboxBlankFill, {
  install: (app: App) => {
    app.component(_IconCheckboxBlankFill.name, _IconCheckboxBlankFill);
  }
});

export default IconCheckboxBlankFill;