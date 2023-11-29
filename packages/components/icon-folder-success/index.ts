import type { App } from 'vue';
import _IconFolderSuccess from './icon-folder-success.vue';

const IconFolderSuccess = Object.assign(_IconFolderSuccess, {
  install: (app: App) => {
    app.component(_IconFolderSuccess.name, _IconFolderSuccess);
  }
});

export default IconFolderSuccess;