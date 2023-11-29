import type { App } from 'vue';
import _IconFolderUploadFill from './icon-folder-upload-fill.vue';

const IconFolderUploadFill = Object.assign(_IconFolderUploadFill, {
  install: (app: App) => {
    app.component(_IconFolderUploadFill.name, _IconFolderUploadFill);
  }
});

export default IconFolderUploadFill;