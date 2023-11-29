import type { App } from 'vue';
import _IconNumbersLine from './icon-numbers-line.vue';

const IconNumbersLine = Object.assign(_IconNumbersLine, {
  install: (app: App) => {
    app.component(_IconNumbersLine.name, _IconNumbersLine);
  }
});

export default IconNumbersLine;