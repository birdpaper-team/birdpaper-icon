import type { App } from 'vue';
import _IconFolderReduceFill from './icon-folder-reduce-fill.vue';

const IconFolderReduceFill = Object.assign(_IconFolderReduceFill, {
  install: (app: App) => {
    app.component(_IconFolderReduceFill.name, _IconFolderReduceFill);
  }
});

export default IconFolderReduceFill;