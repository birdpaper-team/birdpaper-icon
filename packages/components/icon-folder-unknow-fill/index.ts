import type { App } from 'vue';
import _IconFolderUnknowFill from './icon-folder-unknow-fill.vue';

const IconFolderUnknowFill = Object.assign(_IconFolderUnknowFill, {
  install: (app: App) => {
    app.component(_IconFolderUnknowFill.name, _IconFolderUnknowFill);
  }
});

export default IconFolderUnknowFill;