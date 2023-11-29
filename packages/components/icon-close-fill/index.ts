import type { App } from 'vue';
import _IconCloseFill from './icon-close-fill.vue';

const IconCloseFill = Object.assign(_IconCloseFill, {
  install: (app: App) => {
    app.component(_IconCloseFill.name, _IconCloseFill);
  }
});

export default IconCloseFill;