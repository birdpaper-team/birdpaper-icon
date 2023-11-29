import type { App } from 'vue';
import _IconKeyboardOne from './icon-keyboard-one.vue';

const IconKeyboardOne = Object.assign(_IconKeyboardOne, {
  install: (app: App) => {
    app.component(_IconKeyboardOne.name, _IconKeyboardOne);
  }
});

export default IconKeyboardOne;