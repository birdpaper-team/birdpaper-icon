import type { App } from 'vue';
import _Icon4kFill from './icon-4k-fill.vue';

const Icon4kFill = Object.assign(_Icon4kFill, {
  install: (app: App) => {
    app.component(_Icon4kFill.name, _Icon4kFill);
  }
});

export default Icon4kFill;