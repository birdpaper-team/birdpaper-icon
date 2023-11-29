import type { App } from 'vue';
import _IconFileWordFill from './icon-file-word-fill.vue';

const IconFileWordFill = Object.assign(_IconFileWordFill, {
  install: (app: App) => {
    app.component(_IconFileWordFill.name, _IconFileWordFill);
  }
});

export default IconFileWordFill;