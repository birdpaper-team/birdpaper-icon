import type { App } from 'vue';
import _IconFileCheckFill from './icon-file-check-fill.vue';

const IconFileCheckFill = Object.assign(_IconFileCheckFill, {
  install: (app: App) => {
    app.component(_IconFileCheckFill.name, _IconFileCheckFill);
  }
});

export default IconFileCheckFill;