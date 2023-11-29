import type { App } from 'vue';
import _IconKeyFill from './icon-key-fill.vue';

const IconKeyFill = Object.assign(_IconKeyFill, {
  install: (app: App) => {
    app.component(_IconKeyFill.name, _IconKeyFill);
  }
});

export default IconKeyFill;