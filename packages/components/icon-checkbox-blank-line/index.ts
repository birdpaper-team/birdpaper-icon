import type { App } from 'vue';
import _IconCheckboxBlankLine from './icon-checkbox-blank-line.vue';

const IconCheckboxBlankLine = Object.assign(_IconCheckboxBlankLine, {
  install: (app: App) => {
    app.component(_IconCheckboxBlankLine.name, _IconCheckboxBlankLine);
  }
});

export default IconCheckboxBlankLine;