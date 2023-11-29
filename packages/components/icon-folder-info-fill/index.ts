import type { App } from 'vue';
import _IconFolderInfoFill from './icon-folder-info-fill.vue';

const IconFolderInfoFill = Object.assign(_IconFolderInfoFill, {
  install: (app: App) => {
    app.component(_IconFolderInfoFill.name, _IconFolderInfoFill);
  }
});

export default IconFolderInfoFill;