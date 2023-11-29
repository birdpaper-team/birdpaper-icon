import type { App } from 'vue';
import _IconFolderTransferLine from './icon-folder-transfer-line.vue';

const IconFolderTransferLine = Object.assign(_IconFolderTransferLine, {
  install: (app: App) => {
    app.component(_IconFolderTransferLine.name, _IconFolderTransferLine);
  }
});

export default IconFolderTransferLine;