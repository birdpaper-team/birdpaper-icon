import type { App } from 'vue';
import _IconKeyboardFill from './icon-keyboard-fill.vue';

const IconKeyboardFill = Object.assign(_IconKeyboardFill, {
  install: (app: App) => {
    app.component(_IconKeyboardFill.name, _IconKeyboardFill);
  }
});

export default IconKeyboardFill;