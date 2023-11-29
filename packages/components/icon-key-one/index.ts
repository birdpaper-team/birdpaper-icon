import type { App } from 'vue';
import _IconKeyOne from './icon-key-one.vue';

const IconKeyOne = Object.assign(_IconKeyOne, {
  install: (app: App) => {
    app.component(_IconKeyOne.name, _IconKeyOne);
  }
});

export default IconKeyOne;