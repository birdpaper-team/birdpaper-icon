import type { App } from 'vue';
import _IconFolderLockLine from './icon-folder-lock-line.vue';

const IconFolderLockLine = Object.assign(_IconFolderLockLine, {
  install: (app: App) => {
    app.component(_IconFolderLockLine.name, _IconFolderLockLine);
  }
});

export default IconFolderLockLine;