import type { App } from 'vue';
import _IconCheckboxMultipleBlankLine from './icon-checkbox-multiple-blank-line.vue';

const IconCheckboxMultipleBlankLine = Object.assign(_IconCheckboxMultipleBlankLine, {
  install: (app: App) => {
    app.component(_IconCheckboxMultipleBlankLine.name, _IconCheckboxMultipleBlankLine);
  }
});

export default IconCheckboxMultipleBlankLine;