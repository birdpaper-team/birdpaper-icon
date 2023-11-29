import type { App } from 'vue';
import _IconFolderVideoLine from './icon-folder-video-line.vue';

const IconFolderVideoLine = Object.assign(_IconFolderVideoLine, {
  install: (app: App) => {
    app.component(_IconFolderVideoLine.name, _IconFolderVideoLine);
  }
});

export default IconFolderVideoLine;