import type { App } from 'vue';
import _IconFolderSearchOne from './icon-folder-search-one.vue';

const IconFolderSearchOne = Object.assign(_IconFolderSearchOne, {
  install: (app: App) => {
    app.component(_IconFolderSearchOne.name, _IconFolderSearchOne);
  }
});

export default IconFolderSearchOne;