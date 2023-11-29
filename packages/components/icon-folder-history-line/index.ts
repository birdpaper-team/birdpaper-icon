import type { App } from 'vue';
import _IconFolderHistoryLine from './icon-folder-history-line.vue';

const IconFolderHistoryLine = Object.assign(_IconFolderHistoryLine, {
  install: (app: App) => {
    app.component(_IconFolderHistoryLine.name, _IconFolderHistoryLine);
  }
});

export default IconFolderHistoryLine;