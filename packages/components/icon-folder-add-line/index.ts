import type { App } from 'vue';
import _IconFolderAddLine from './icon-folder-add-line.vue';

const IconFolderAddLine = Object.assign(_IconFolderAddLine, {
  install: (app: App) => {
    app.component(_IconFolderAddLine.name, _IconFolderAddLine);
  }
});

export default IconFolderAddLine;