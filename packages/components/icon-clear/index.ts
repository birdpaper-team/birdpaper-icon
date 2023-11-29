import type { App } from 'vue';
import _IconClear from './icon-clear.vue';

const IconClear = Object.assign(_IconClear, {
  install: (app: App) => {
    app.component(_IconClear.name, _IconClear);
  }
});

export default IconClear;