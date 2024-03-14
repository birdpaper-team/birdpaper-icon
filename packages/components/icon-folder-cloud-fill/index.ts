import type { App } from 'vue';
import _IconFolderCloudFill from './icon-folder-cloud-fill.vue';

const IconFolderCloudFill = Object.assign(_IconFolderCloudFill, {
  install: (app: App) => {
    app.component(_IconFolderCloudFill.name, _IconFolderCloudFill);
  }
});

export default IconFolderCloudFill;