import type { App } from 'vue';
import _IconFolderUpload from './icon-folder-upload.vue';

const IconFolderUpload = Object.assign(_IconFolderUpload, {
  install: (app: App) => {
    app.component(_IconFolderUpload.name, _IconFolderUpload);
  }
});

export default IconFolderUpload;