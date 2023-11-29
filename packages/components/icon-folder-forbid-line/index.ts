import type { App } from 'vue';
import _IconFolderForbidLine from './icon-folder-forbid-line.vue';

const IconFolderForbidLine = Object.assign(_IconFolderForbidLine, {
  install: (app: App) => {
    app.component(_IconFolderForbidLine.name, _IconFolderForbidLine);
  }
});

export default IconFolderForbidLine;