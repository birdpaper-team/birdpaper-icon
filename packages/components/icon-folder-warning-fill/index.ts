import type { App } from 'vue';
import _IconFolderWarningFill from './icon-folder-warning-fill.vue';

const IconFolderWarningFill = Object.assign(_IconFolderWarningFill, {
  install: (app: App) => {
    app.component(_IconFolderWarningFill.name, _IconFolderWarningFill);
  }
});

export default IconFolderWarningFill;