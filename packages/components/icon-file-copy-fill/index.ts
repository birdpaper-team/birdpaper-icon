import type { App } from 'vue';
import _IconFileCopyFill from './icon-file-copy-fill.vue';

const IconFileCopyFill = Object.assign(_IconFileCopyFill, {
  install: (app: App) => {
    app.component(_IconFileCopyFill.name, _IconFileCopyFill);
  }
});

export default IconFileCopyFill;