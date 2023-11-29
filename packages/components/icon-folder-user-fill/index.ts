import type { App } from 'vue';
import _IconFolderUserFill from './icon-folder-user-fill.vue';

const IconFolderUserFill = Object.assign(_IconFolderUserFill, {
  install: (app: App) => {
    app.component(_IconFolderUserFill.name, _IconFolderUserFill);
  }
});

export default IconFolderUserFill;