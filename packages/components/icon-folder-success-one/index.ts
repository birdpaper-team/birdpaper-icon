import type { App } from 'vue';
import _IconFolderSuccessOne from './icon-folder-success-one.vue';

const IconFolderSuccessOne = Object.assign(_IconFolderSuccessOne, {
  install: (app: App) => {
    app.component(_IconFolderSuccessOne.name, _IconFolderSuccessOne);
  }
});

export default IconFolderSuccessOne;