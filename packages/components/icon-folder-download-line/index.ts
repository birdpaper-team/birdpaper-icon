import type { App } from 'vue';
import _IconFolderDownloadLine from './icon-folder-download-line.vue';

const IconFolderDownloadLine = Object.assign(_IconFolderDownloadLine, {
  install: (app: App) => {
    app.component(_IconFolderDownloadLine.name, _IconFolderDownloadLine);
  }
});

export default IconFolderDownloadLine;