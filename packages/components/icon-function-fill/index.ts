import type { App } from 'vue';
import _IconFunctionFill from './icon-function-fill.vue';

const IconFunctionFill = Object.assign(_IconFunctionFill, {
  install: (app: App) => {
    app.component(_IconFunctionFill.name, _IconFunctionFill);
  }
});

export default IconFunctionFill;