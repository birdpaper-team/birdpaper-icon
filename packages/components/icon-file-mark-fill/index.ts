import type { App } from 'vue';
import _IconFileMarkFill from './icon-file-mark-fill.vue';

const IconFileMarkFill = Object.assign(_IconFileMarkFill, {
  install: (app: App) => {
    app.component(_IconFileMarkFill.name, _IconFileMarkFill);
  }
});

export default IconFileMarkFill;