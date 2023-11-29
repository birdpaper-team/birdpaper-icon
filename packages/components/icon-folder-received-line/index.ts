import type { App } from 'vue';
import _IconFolderReceivedLine from './icon-folder-received-line.vue';

const IconFolderReceivedLine = Object.assign(_IconFolderReceivedLine, {
  install: (app: App) => {
    app.component(_IconFolderReceivedLine.name, _IconFolderReceivedLine);
  }
});

export default IconFolderReceivedLine;