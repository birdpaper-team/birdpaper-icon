import type { App } from 'vue';
import _IconFolderDownloadFill from './icon-folder-download-fill.vue';

const IconFolderDownloadFill = Object.assign(_IconFolderDownloadFill, {
  install: (app: App) => {
    app.component(_IconFolderDownloadFill.name, _IconFolderDownloadFill);
  }
});

export default IconFolderDownloadFill;