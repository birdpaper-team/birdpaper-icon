import type { App } from 'vue';
import _IconFolderSharedLine from './icon-folder-shared-line.vue';

const IconFolderSharedLine = Object.assign(_IconFolderSharedLine, {
  install: (app: App) => {
    app.component(_IconFolderSharedLine.name, _IconFolderSharedLine);
  }
});

export default IconFolderSharedLine;