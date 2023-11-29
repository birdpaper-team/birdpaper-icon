import type { App } from 'vue';
import _IconFolderFocusOne from './icon-folder-focus-one.vue';

const IconFolderFocusOne = Object.assign(_IconFolderFocusOne, {
  install: (app: App) => {
    app.component(_IconFolderFocusOne.name, _IconFolderFocusOne);
  }
});

export default IconFolderFocusOne;