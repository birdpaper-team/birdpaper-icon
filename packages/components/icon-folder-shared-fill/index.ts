import type { App } from 'vue';
import _IconFolderSharedFill from './icon-folder-shared-fill.vue';

const IconFolderSharedFill = Object.assign(_IconFolderSharedFill, {
  install: (app: App) => {
    app.component(_IconFolderSharedFill.name, _IconFolderSharedFill);
  }
});

export default IconFolderSharedFill;