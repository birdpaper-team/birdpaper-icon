import type { App } from 'vue';
import _IconFileCodeFill from './icon-file-code-fill.vue';

const IconFileCodeFill = Object.assign(_IconFileCodeFill, {
  install: (app: App) => {
    app.component(_IconFileCodeFill.name, _IconFileCodeFill);
  }
});

export default IconFileCodeFill;