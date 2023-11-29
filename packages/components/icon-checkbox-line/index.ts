import type { App } from 'vue';
import _IconCheckboxLine from './icon-checkbox-line.vue';

const IconCheckboxLine = Object.assign(_IconCheckboxLine, {
  install: (app: App) => {
    app.component(_IconCheckboxLine.name, _IconCheckboxLine);
  }
});

export default IconCheckboxLine;