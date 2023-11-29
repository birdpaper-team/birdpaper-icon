import type { App } from 'vue';
import _IconInputMethodLine from './icon-input-method-line.vue';

const IconInputMethodLine = Object.assign(_IconInputMethodLine, {
  install: (app: App) => {
    app.component(_IconInputMethodLine.name, _IconInputMethodLine);
  }
});

export default IconInputMethodLine;