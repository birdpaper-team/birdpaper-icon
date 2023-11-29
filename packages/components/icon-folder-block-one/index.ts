import type { App } from 'vue';
import _IconFolderBlockOne from './icon-folder-block-one.vue';

const IconFolderBlockOne = Object.assign(_IconFolderBlockOne, {
  install: (app: App) => {
    app.component(_IconFolderBlockOne.name, _IconFolderBlockOne);
  }
});

export default IconFolderBlockOne;