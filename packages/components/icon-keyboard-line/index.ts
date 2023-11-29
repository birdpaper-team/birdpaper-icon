import type { App } from 'vue';
import _IconKeyboardLine from './icon-keyboard-line.vue';

const IconKeyboardLine = Object.assign(_IconKeyboardLine, {
  install: (app: App) => {
    app.component(_IconKeyboardLine.name, _IconKeyboardLine);
  }
});

export default IconKeyboardLine;