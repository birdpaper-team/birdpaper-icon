import type { App } from 'vue';
import _IconFolderCodeOne from './icon-folder-code-one.vue';

const IconFolderCodeOne = Object.assign(_IconFolderCodeOne, {
  install: (app: App) => {
    app.component(_IconFolderCodeOne.name, _IconFolderCodeOne);
  }
});

export default IconFolderCodeOne;