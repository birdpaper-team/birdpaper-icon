import type { App } from 'vue';
import _IconFolderZipLine from './icon-folder-zip-line.vue';

const IconFolderZipLine = Object.assign(_IconFolderZipLine, {
  install: (app: App) => {
    app.component(_IconFolderZipLine.name, _IconFolderZipLine);
  }
});

export default IconFolderZipLine;