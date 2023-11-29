import type { App } from 'vue';
import _IconCheckboxIndeterminateFill from './icon-checkbox-indeterminate-fill.vue';

const IconCheckboxIndeterminateFill = Object.assign(_IconCheckboxIndeterminateFill, {
  install: (app: App) => {
    app.component(_IconCheckboxIndeterminateFill.name, _IconCheckboxIndeterminateFill);
  }
});

export default IconCheckboxIndeterminateFill;