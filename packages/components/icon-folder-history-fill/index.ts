import type { App } from 'vue';
import _IconFolderHistoryFill from './icon-folder-history-fill.vue';

const IconFolderHistoryFill = Object.assign(_IconFolderHistoryFill, {
  install: (app: App) => {
    app.component(_IconFolderHistoryFill.name, _IconFolderHistoryFill);
  }
});

export default IconFolderHistoryFill;