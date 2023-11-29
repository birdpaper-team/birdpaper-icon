import type { App } from 'vue';
import _IconContrastFill from './icon-contrast-fill.vue';

const IconContrastFill = Object.assign(_IconContrastFill, {
  install: (app: App) => {
    app.component(_IconContrastFill.name, _IconContrastFill);
  }
});

export default IconContrastFill;