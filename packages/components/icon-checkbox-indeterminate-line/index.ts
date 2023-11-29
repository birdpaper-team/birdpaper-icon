import type { App } from 'vue';
import _IconCheckboxIndeterminateLine from './icon-checkbox-indeterminate-line.vue';

const IconCheckboxIndeterminateLine = Object.assign(_IconCheckboxIndeterminateLine, {
  install: (app: App) => {
    app.component(_IconCheckboxIndeterminateLine.name, _IconCheckboxIndeterminateLine);
  }
});

export default IconCheckboxIndeterminateLine;