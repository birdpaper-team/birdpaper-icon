import type { App } from 'vue';
import _IconFolderUnknowLine from './icon-folder-unknow-line.vue';

const IconFolderUnknowLine = Object.assign(_IconFolderUnknowLine, {
  install: (app: App) => {
    app.component(_IconFolderUnknowLine.name, _IconFolderUnknowLine);
  }
});

export default IconFolderUnknowLine;