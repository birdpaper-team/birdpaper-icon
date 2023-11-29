import type { App } from 'vue';
import _IconInputMethodFill from './icon-input-method-fill.vue';

const IconInputMethodFill = Object.assign(_IconInputMethodFill, {
  install: (app: App) => {
    app.component(_IconInputMethodFill.name, _IconInputMethodFill);
  }
});

export default IconInputMethodFill;