import type { App } from 'vue';
import _IconFolderWarningLine from './icon-folder-warning-line.vue';

const IconFolderWarningLine = Object.assign(_IconFolderWarningLine, {
  install: (app: App) => {
    app.component(_IconFolderWarningLine.name, _IconFolderWarningLine);
  }
});

export default IconFolderWarningLine;