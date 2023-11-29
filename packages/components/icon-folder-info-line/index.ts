import type { App } from 'vue';
import _IconFolderInfoLine from './icon-folder-info-line.vue';

const IconFolderInfoLine = Object.assign(_IconFolderInfoLine, {
  install: (app: App) => {
    app.component(_IconFolderInfoLine.name, _IconFolderInfoLine);
  }
});

export default IconFolderInfoLine;