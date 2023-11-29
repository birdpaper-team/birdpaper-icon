import type { App } from 'vue';
import _IconFolderAddFill from './icon-folder-add-fill.vue';

const IconFolderAddFill = Object.assign(_IconFolderAddFill, {
  install: (app: App) => {
    app.component(_IconFolderAddFill.name, _IconFolderAddFill);
  }
});

export default IconFolderAddFill;