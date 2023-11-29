import type { App } from 'vue';
import _IconFolderLockFill from './icon-folder-lock-fill.vue';

const IconFolderLockFill = Object.assign(_IconFolderLockFill, {
  install: (app: App) => {
    app.component(_IconFolderLockFill.name, _IconFolderLockFill);
  }
});

export default IconFolderLockFill;