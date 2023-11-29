import type { App } from 'vue';
import _IconFileListFill from './icon-file-list-fill.vue';

const IconFileListFill = Object.assign(_IconFileListFill, {
  install: (app: App) => {
    app.component(_IconFileListFill.name, _IconFileListFill);
  }
});

export default IconFileListFill;