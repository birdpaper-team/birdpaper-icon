import type { App } from 'vue';
import _IconFolderFill from './icon-folder-fill.vue';

const IconFolderFill = Object.assign(_IconFolderFill, {
  install: (app: App) => {
    app.component(_IconFolderFill.name, _IconFolderFill);
  }
});

export default IconFolderFill;