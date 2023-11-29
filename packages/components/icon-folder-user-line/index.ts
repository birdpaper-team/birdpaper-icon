import type { App } from 'vue';
import _IconFolderUserLine from './icon-folder-user-line.vue';

const IconFolderUserLine = Object.assign(_IconFolderUserLine, {
  install: (app: App) => {
    app.component(_IconFolderUserLine.name, _IconFolderUserLine);
  }
});

export default IconFolderUserLine;