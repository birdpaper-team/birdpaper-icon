import type { App } from 'vue';
import _IconFolderOpenLine from './icon-folder-open-line.vue';

const IconFolderOpenLine = Object.assign(_IconFolderOpenLine, {
  install: (app: App) => {
    app.component(_IconFolderOpenLine.name, _IconFolderOpenLine);
  }
});

export default IconFolderOpenLine;