import type { App } from 'vue';
import _IconFolderImageLine from './icon-folder-image-line.vue';

const IconFolderImageLine = Object.assign(_IconFolderImageLine, {
  install: (app: App) => {
    app.component(_IconFolderImageLine.name, _IconFolderImageLine);
  }
});

export default IconFolderImageLine;