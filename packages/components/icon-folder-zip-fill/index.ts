import type { App } from 'vue';
import _IconFolderZipFill from './icon-folder-zip-fill.vue';

const IconFolderZipFill = Object.assign(_IconFolderZipFill, {
  install: (app: App) => {
    app.component(_IconFolderZipFill.name, _IconFolderZipFill);
  }
});

export default IconFolderZipFill;