import type { App } from 'vue';
import _IconFileTransferLine from './icon-file-transfer-line.vue';

const IconFileTransferLine = Object.assign(_IconFileTransferLine, {
  install: (app: App) => {
    app.component(_IconFileTransferLine.name, _IconFileTransferLine);
  }
});

export default IconFileTransferLine;