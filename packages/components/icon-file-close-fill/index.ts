import type { App } from 'vue';
import _IconFileCloseFill from './icon-file-close-fill.vue';

const IconFileCloseFill = Object.assign(_IconFileCloseFill, {
  install: (app: App) => {
    app.component(_IconFileCloseFill.name, _IconFileCloseFill);
  }
});

export default IconFileCloseFill;