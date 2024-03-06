import type { App } from 'vue';
import _IconFunctionAddFill from './icon-function-add-fill.vue';

const IconFunctionAddFill = Object.assign(_IconFunctionAddFill, {
  install: (app: App) => {
    app.component(_IconFunctionAddFill.name, _IconFunctionAddFill);
  }
});

export default IconFunctionAddFill;