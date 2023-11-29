import type { App } from 'vue';
import _IconFolderForbidFill from './icon-folder-forbid-fill.vue';

const IconFolderForbidFill = Object.assign(_IconFolderForbidFill, {
  install: (app: App) => {
    app.component(_IconFolderForbidFill.name, _IconFolderForbidFill);
  }
});

export default IconFolderForbidFill;