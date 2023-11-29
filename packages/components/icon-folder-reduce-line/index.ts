import type { App } from 'vue';
import _IconFolderReduceLine from './icon-folder-reduce-line.vue';

const IconFolderReduceLine = Object.assign(_IconFolderReduceLine, {
  install: (app: App) => {
    app.component(_IconFolderReduceLine.name, _IconFolderReduceLine);
  }
});

export default IconFolderReduceLine;