import type { App } from 'vue';
import _IconFoldersLine from './icon-folders-line.vue';

const IconFoldersLine = Object.assign(_IconFoldersLine, {
  install: (app: App) => {
    app.component(_IconFoldersLine.name, _IconFoldersLine);
  }
});

export default IconFoldersLine;