import type { App } from 'vue';
import _IconPassValidFill from './icon-pass-valid-fill.vue';

const IconPassValidFill = Object.assign(_IconPassValidFill, {
  install: (app: App) => {
    app.component(_IconPassValidFill.name, _IconPassValidFill);
  }
});

export default IconPassValidFill;