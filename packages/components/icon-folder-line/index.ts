import type { App } from 'vue';
import _IconFolderLine from './icon-folder-line.vue';

const IconFolderLine = Object.assign(_IconFolderLine, {
  install: (app: App) => {
    app.component(_IconFolderLine.name, _IconFolderLine);
  }
});

export default IconFolderLine;