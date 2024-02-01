import type { App } from 'vue';
import _IconFolderCloseLine from './icon-folder-close-line.vue';

const IconFolderCloseLine = Object.assign(_IconFolderCloseLine, {
  install: (app: App) => {
    app.component(_IconFolderCloseLine.name, _IconFolderCloseLine);
  }
});

export default IconFolderCloseLine;