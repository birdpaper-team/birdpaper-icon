import type { App } from 'vue';
import _IconFolderTransferFill from './icon-folder-transfer-fill.vue';

const IconFolderTransferFill = Object.assign(_IconFolderTransferFill, {
  install: (app: App) => {
    app.component(_IconFolderTransferFill.name, _IconFolderTransferFill);
  }
});

export default IconFolderTransferFill;