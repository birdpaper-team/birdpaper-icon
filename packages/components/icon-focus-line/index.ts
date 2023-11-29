import type { App } from 'vue';
import _IconFocusLine from './icon-focus-line.vue';

const IconFocusLine = Object.assign(_IconFocusLine, {
  install: (app: App) => {
    app.component(_IconFocusLine.name, _IconFocusLine);
  }
});

export default IconFocusLine;