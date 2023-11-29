import type { App } from 'vue';
import _IconContrastLine from './icon-contrast-line.vue';

const IconContrastLine = Object.assign(_IconContrastLine, {
  install: (app: App) => {
    app.component(_IconContrastLine.name, _IconContrastLine);
  }
});

export default IconContrastLine;