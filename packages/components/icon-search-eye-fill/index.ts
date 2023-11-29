import type { App } from 'vue';
import _IconSearchEyeFill from './icon-search-eye-fill.vue';

const IconSearchEyeFill = Object.assign(_IconSearchEyeFill, {
  install: (app: App) => {
    app.component(_IconSearchEyeFill.name, _IconSearchEyeFill);
  }
});

export default IconSearchEyeFill;