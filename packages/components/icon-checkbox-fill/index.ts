import type { App } from 'vue';
import _IconCheckboxFill from './icon-checkbox-fill.vue';

const IconCheckboxFill = Object.assign(_IconCheckboxFill, {
  install: (app: App) => {
    app.component(_IconCheckboxFill.name, _IconCheckboxFill);
  }
});

export default IconCheckboxFill;