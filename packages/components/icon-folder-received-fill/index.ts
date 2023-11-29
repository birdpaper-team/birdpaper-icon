import type { App } from 'vue';
import _IconFolderReceivedFill from './icon-folder-received-fill.vue';

const IconFolderReceivedFill = Object.assign(_IconFolderReceivedFill, {
  install: (app: App) => {
    app.component(_IconFolderReceivedFill.name, _IconFolderReceivedFill);
  }
});

export default IconFolderReceivedFill;