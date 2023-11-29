import type { App } from 'vue';
import _IconKeyboardBoxLine from './icon-keyboard-box-line.vue';

const IconKeyboardBoxLine = Object.assign(_IconKeyboardBoxLine, {
  install: (app: App) => {
    app.component(_IconKeyboardBoxLine.name, _IconKeyboardBoxLine);
  }
});

export default IconKeyboardBoxLine;