import type { App } from 'vue';
import _IconFolderOpenFill from './icon-folder-open-fill.vue';

const IconFolderOpenFill = Object.assign(_IconFolderOpenFill, {
  install: (app: App) => {
    app.component(_IconFolderOpenFill.name, _IconFolderOpenFill);
  }
});

export default IconFolderOpenFill;