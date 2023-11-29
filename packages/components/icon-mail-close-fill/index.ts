import type { App } from 'vue';
import _IconMailCloseFill from './icon-mail-close-fill.vue';

const IconMailCloseFill = Object.assign(_IconMailCloseFill, {
  install: (app: App) => {
    app.component(_IconMailCloseFill.name, _IconMailCloseFill);
  }
});

export default IconMailCloseFill;