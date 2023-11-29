import type { App } from 'vue';
import _IconContrastDropLine from './icon-contrast-drop-line.vue';

const IconContrastDropLine = Object.assign(_IconContrastDropLine, {
  install: (app: App) => {
    app.component(_IconContrastDropLine.name, _IconContrastDropLine);
  }
});

export default IconContrastDropLine;