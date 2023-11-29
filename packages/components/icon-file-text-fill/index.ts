import type { App } from 'vue';
import _IconFileTextFill from './icon-file-text-fill.vue';

const IconFileTextFill = Object.assign(_IconFileTextFill, {
  install: (app: App) => {
    app.component(_IconFileTextFill.name, _IconFileTextFill);
  }
});

export default IconFileTextFill;