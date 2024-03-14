import type { App } from 'vue';
import _IconFolderCloudLine from './icon-folder-cloud-line.vue';

const IconFolderCloudLine = Object.assign(_IconFolderCloudLine, {
  install: (app: App) => {
    app.component(_IconFolderCloudLine.name, _IconFolderCloudLine);
  }
});

export default IconFolderCloudLine;