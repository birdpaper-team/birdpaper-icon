import type { App } from 'vue';
import _IconFileTransferFill from './icon-file-transfer-fill.vue';

const IconFileTransferFill = Object.assign(_IconFileTransferFill, {
  install: (app: App) => {
    app.component(_IconFileTransferFill.name, _IconFileTransferFill);
  }
});

export default IconFileTransferFill;