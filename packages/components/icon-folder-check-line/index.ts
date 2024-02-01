import type { App } from 'vue';
import _IconFolderCheckLine from './icon-folder-check-line.vue';

const IconFolderCheckLine = Object.assign(_IconFolderCheckLine, {
  install: (app: App) => {
    app.component(_IconFolderCheckLine.name, _IconFolderCheckLine);
  }
});

export default IconFolderCheckLine;