import type { App } from 'vue';
import _IconKeyboardBoxFill from './icon-keyboard-box-fill.vue';

const IconKeyboardBoxFill = Object.assign(_IconKeyboardBoxFill, {
  install: (app: App) => {
    app.component(_IconKeyboardBoxFill.name, _IconKeyboardBoxFill);
  }
});

export default IconKeyboardBoxFill;