import type { App } from 'vue';
import _IconFolderLockOne from './icon-folder-lock-one.vue';

const IconFolderLockOne = Object.assign(_IconFolderLockOne, {
  install: (app: App) => {
    app.component(_IconFolderLockOne.name, _IconFolderLockOne);
  }
});

export default IconFolderLockOne;