import type { App } from 'vue';
import _IconFolderCheckFill from './icon-folder-check-fill.vue';

const IconFolderCheckFill = Object.assign(_IconFolderCheckFill, {
  install: (app: App) => {
    app.component(_IconFolderCheckFill.name, _IconFolderCheckFill);
  }
});

export default IconFolderCheckFill;