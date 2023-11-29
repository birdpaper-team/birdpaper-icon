import type { App } from 'vue';
import _IconFocusFill from './icon-focus-fill.vue';

const IconFocusFill = Object.assign(_IconFocusFill, {
  install: (app: App) => {
    app.component(_IconFocusFill.name, _IconFocusFill);
  }
});

export default IconFocusFill;