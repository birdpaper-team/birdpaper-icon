import type { App } from 'vue';
import _IconFolderFailed from './icon-folder-failed.vue';

const IconFolderFailed = Object.assign(_IconFolderFailed, {
  install: (app: App) => {
    app.component(_IconFolderFailed.name, _IconFolderFailed);
  }
});

export default IconFolderFailed;