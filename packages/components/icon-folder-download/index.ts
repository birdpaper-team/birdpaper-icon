import type { App } from 'vue';
import _IconFolderDownload from './icon-folder-download.vue';

const IconFolderDownload = Object.assign(_IconFolderDownload, {
  install: (app: App) => {
    app.component(_IconFolderDownload.name, _IconFolderDownload);
  }
});

export default IconFolderDownload;