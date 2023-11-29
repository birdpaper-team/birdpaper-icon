import type { App } from 'vue';
import _IconFolderUploadLine from './icon-folder-upload-line.vue';

const IconFolderUploadLine = Object.assign(_IconFolderUploadLine, {
  install: (app: App) => {
    app.component(_IconFolderUploadLine.name, _IconFolderUploadLine);
  }
});

export default IconFolderUploadLine;